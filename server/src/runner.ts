import { spawn } from 'node:child_process'
import { existsSync, promises as fs } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

export type RunLanguage = 'javascript' | 'python' | 'cpp' | 'java'

export type RunRequest = {
  language: RunLanguage
  code: string
  stdin?: string
  timeoutMs?: number
}

export type RunResult = {
  stdout: string
  stderr: string
  exitCode: number | null
  timedOut: boolean
  compileError?: string
  durationMs: number
}

const MAX_CODE_BYTES = 200_000
const DEFAULT_TIMEOUT = 8_000

function truncate(s: string, max = 50_000) {
  return s.length > max ? `${s.slice(0, max)}\n…[truncated]` : s
}

function findJavaHome(): string | undefined {
  const root = path.resolve(import.meta.dirname, '../../tools')
  const candidates = [
    process.env.JAVA_HOME,
    path.join(root, 'jdk-21.0.11+10', 'Contents', 'Home'),
    '/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home',
    '/opt/homebrew/opt/openjdk/libexec/openjdk.jdk/Contents/Home',
    '/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home',
  ].filter((c): c is string => Boolean(c))
  return candidates.find((c) => existsSync(path.join(c, 'bin', 'javac')))
}

async function runProcess(
  cmd: string,
  args: string[],
  opts: { cwd: string; stdin?: string; timeoutMs: number; env?: NodeJS.ProcessEnv },
): Promise<Omit<RunResult, 'durationMs' | 'compileError'>> {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, {
      cwd: opts.cwd,
      env: { ...process.env, ...opts.env },
      stdio: ['pipe', 'pipe', 'pipe'],
    })

    let stdout = ''
    let stderr = ''
    let timedOut = false
    const timer = setTimeout(() => {
      timedOut = true
      child.kill('SIGKILL')
    }, opts.timeoutMs)

    child.stdout.on('data', (d: Buffer) => {
      stdout += d.toString()
      if (stdout.length > 100_000) child.kill('SIGKILL')
    })
    child.stderr.on('data', (d: Buffer) => {
      stderr += d.toString()
      if (stderr.length > 100_000) child.kill('SIGKILL')
    })

    if (opts.stdin) child.stdin.write(opts.stdin)
    child.stdin.end()

    child.on('close', (code) => {
      clearTimeout(timer)
      resolve({
        stdout: truncate(stdout),
        stderr: truncate(stderr),
        exitCode: code,
        timedOut,
      })
    })

    child.on('error', (err) => {
      clearTimeout(timer)
      resolve({
        stdout: '',
        stderr: err.message,
        exitCode: 1,
        timedOut: false,
      })
    })
  })
}

async function withTempDir<T>(fn: (dir: string) => Promise<T>): Promise<T> {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'codebuddy-'))
  try {
    return await fn(dir)
  } finally {
    await fs.rm(dir, { recursive: true, force: true }).catch(() => undefined)
  }
}

function extractJavaClassName(code: string): string {
  const m = code.match(/public\s+class\s+([A-Za-z_][A-Za-z0-9_]*)/)
  return m?.[1] ?? 'Main'
}

export async function runCode(req: RunRequest): Promise<RunResult> {
  const started = Date.now()
  const timeoutMs = req.timeoutMs ?? DEFAULT_TIMEOUT

  if (!req.code || Buffer.byteLength(req.code, 'utf8') > MAX_CODE_BYTES) {
    return {
      stdout: '',
      stderr: 'Code is empty or too large.',
      exitCode: 1,
      timedOut: false,
      durationMs: Date.now() - started,
    }
  }

  return withTempDir(async (dir) => {
    const id = randomUUID().slice(0, 8)

    if (req.language === 'javascript') {
      const file = path.join(dir, `${id}.mjs`)
      await fs.writeFile(file, req.code, 'utf8')
      const result = await runProcess(process.execPath, [file], {
        cwd: dir,
        stdin: req.stdin,
        timeoutMs,
      })
      return { ...result, durationMs: Date.now() - started }
    }

    if (req.language === 'python') {
      const file = path.join(dir, `${id}.py`)
      await fs.writeFile(file, req.code, 'utf8')
      const result = await runProcess('python3', [file], {
        cwd: dir,
        stdin: req.stdin,
        timeoutMs,
      })
      return { ...result, durationMs: Date.now() - started }
    }

    if (req.language === 'cpp') {
      const src = path.join(dir, `${id}.cpp`)
      const bin = path.join(dir, id)
      await fs.writeFile(src, req.code, 'utf8')
      const compile = await runProcess('g++', ['-std=c++17', '-O0', src, '-o', bin], {
        cwd: dir,
        timeoutMs: Math.min(timeoutMs, 10_000),
      })
      if (compile.exitCode !== 0 || compile.timedOut) {
        return {
          stdout: '',
          stderr: compile.stderr || compile.stdout,
          exitCode: compile.exitCode,
          timedOut: compile.timedOut,
          compileError: compile.stderr || 'Compilation failed',
          durationMs: Date.now() - started,
        }
      }
      const result = await runProcess(bin, [], {
        cwd: dir,
        stdin: req.stdin,
        timeoutMs,
      })
      return { ...result, durationMs: Date.now() - started }
    }

    if (req.language === 'java') {
      const className = extractJavaClassName(req.code)
      const src = path.join(dir, `${className}.java`)
      await fs.writeFile(src, req.code, 'utf8')
      const javaHome = findJavaHome()
      const env = javaHome
        ? {
            JAVA_HOME: javaHome,
            PATH: `${path.join(javaHome, 'bin')}:${process.env.PATH}`,
          }
        : undefined
      const javac = javaHome ? path.join(javaHome, 'bin', 'javac') : 'javac'
      const java = javaHome ? path.join(javaHome, 'bin', 'java') : 'java'

      const compile = await runProcess(javac, [src], {
        cwd: dir,
        timeoutMs: Math.min(timeoutMs, 12_000),
        env,
      })
      if (compile.exitCode !== 0 || compile.timedOut) {
        return {
          stdout: '',
          stderr: compile.stderr || compile.stdout || 'javac not found. Install a JDK to run Java lessons.',
          exitCode: compile.exitCode,
          timedOut: compile.timedOut,
          compileError: compile.stderr || 'Compilation failed',
          durationMs: Date.now() - started,
        }
      }
      const result = await runProcess(java, [className], {
        cwd: dir,
        stdin: req.stdin,
        timeoutMs,
        env,
      })
      return { ...result, durationMs: Date.now() - started }
    }

    return {
      stdout: '',
      stderr: `Unsupported language`,
      exitCode: 1,
      timedOut: false,
      durationMs: Date.now() - started,
    }
  })
}

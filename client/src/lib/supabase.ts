import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const supabaseUrl = url && url.startsWith('https://') ? url : null

export const supabase: SupabaseClient | null =
  supabaseUrl && anon ? createClient(supabaseUrl, anon) : null

export type SchemaStatus = 'checking' | 'ready' | 'missing' | 'error' | 'offline'

/** Detect whether CodeBuddy tables exist on the linked project. */
export async function checkCodeBuddySchema(): Promise<{
  status: SchemaStatus
  detail: string
}> {
  if (!supabase) {
    return { status: 'offline', detail: 'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.' }
  }

  const { error } = await supabase.from('codebuddy_progress').select('id').limit(1)

  if (!error) {
    return { status: 'ready', detail: 'codebuddy_progress is reachable.' }
  }

  const msg = error.message || ''
  const code = (error as { code?: string }).code

  if (code === 'PGRST205' || /could not find the table/i.test(msg) || /schema cache/i.test(msg)) {
    return {
      status: 'missing',
      detail: 'Tables are not created yet. Run supabase/schema.sql in the SQL Editor.',
    }
  }

  // Empty result for signed-out users with RLS still means the table exists
  if (code === 'PGRST116') {
    return { status: 'ready', detail: 'Tables exist.' }
  }

  return { status: 'error', detail: msg }
}

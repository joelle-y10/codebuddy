export type AvatarKind = 'emoji' | 'color' | 'image'

export type ProfileAvatar = {
  kind: AvatarKind
  emoji: string
  color: string
  /** Data URL or remote URL for uploaded image */
  imageUrl: string
}

export const DEFAULT_AVATAR: ProfileAvatar = {
  kind: 'color',
  emoji: '🙂',
  color: '#5ec8ff',
  imageUrl: '',
}

export const AVATAR_EMOJIS = [
  '🙂',
  '😎',
  '🤓',
  '🥳',
  '🤖',
  '🐱',
  '🐶',
  '🦊',
  '🐼',
  '🐸',
  '🌟',
  '🔥',
  '💡',
  '🚀',
  '🎧',
  '📚',
]

export const AVATAR_COLORS = [
  '#5ec8ff',
  '#c8f542',
  '#ff7a59',
  '#d4a1ff',
  '#7dffb3',
  '#ffb86b',
  '#ff8a7a',
  '#8ab4ff',
]

/** Resize + compress an image for profile storage (no Storage bucket required). */
export function fileToAvatarDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Choose an image file (PNG, JPG, or WebP).'))
      return
    }
    if (file.size > 4_000_000) {
      reject(new Error('Image is too large. Pick one under 4 MB.'))
      return
    }
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('Could not read that image.'))
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('Could not load that image.'))
      img.onload = () => {
        const size = 160
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('Canvas unavailable.'))
          return
        }
        const scale = Math.max(size / img.width, size / img.height)
        const w = img.width * scale
        const h = img.height * scale
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82)
        if (dataUrl.length > 120_000) {
          reject(new Error('Image is still too large after compression. Try a simpler photo.'))
          return
        }
        resolve(dataUrl)
      }
      img.src = String(reader.result)
    }
    reader.readAsDataURL(file)
  })
}

/** Redirect target for auth emails (works with HashRouter + GitHub Pages base). */
export function authEmailRedirect(path = '/account'): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const origin = window.location.origin
  const prefix = base ? `${origin}${base}` : origin
  return `${prefix}/#${path.startsWith('/') ? path : `/${path}`}`
}

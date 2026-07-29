import type { ProfileAvatar } from '../lib/profileAvatar'
import { DEFAULT_AVATAR } from '../lib/profileAvatar'

type Props = {
  avatar: ProfileAvatar
  label: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function AvatarBubble({ avatar, label, size = 'md', className = '' }: Props) {
  const a = avatar.kind ? avatar : DEFAULT_AVATAR
  const initial = label.trim().slice(0, 1).toUpperCase() || '?'

  if (a.kind === 'image' && a.imageUrl) {
    return (
      <span
        className={`avatar-bubble avatar-${size} ${className}`}
        style={{ backgroundImage: `url(${a.imageUrl})` }}
        role="img"
        aria-label={label}
      />
    )
  }

  if (a.kind === 'emoji') {
    return (
      <span
        className={`avatar-bubble avatar-${size} avatar-emoji ${className}`}
        style={{ background: 'rgba(232, 240, 233, 0.08)' }}
        aria-hidden
      >
        {a.emoji || '🙂'}
      </span>
    )
  }

  return (
    <span
      className={`avatar-bubble avatar-${size} ${className}`}
      style={{ background: a.color || DEFAULT_AVATAR.color }}
      aria-hidden
    >
      {initial}
    </span>
  )
}

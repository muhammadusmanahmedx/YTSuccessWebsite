'use client'

import { Icon } from '@iconify/react'

const map = {
  play: 'solar:play-circle-bold',
  users: 'solar:users-group-rounded-bold',
  badge: 'solar:medal-ribbons-star-bold',
  shopping: 'solar:cart-large-4-bold',
  tag: 'solar:tag-price-bold',
} as const

export default function ServiceIcon({
  name,
  className = 'text-primary',
}: {
  name: keyof typeof map
  className?: string
}) {
  return <Icon icon={map[name]} width={28} height={28} className={className} />
}

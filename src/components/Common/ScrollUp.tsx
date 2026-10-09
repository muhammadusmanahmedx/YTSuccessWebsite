'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Jump to top instantly on route change (no smooth scroll delay). */
export default function ScrollUp() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

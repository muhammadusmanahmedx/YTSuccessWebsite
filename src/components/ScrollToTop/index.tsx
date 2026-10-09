'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-28 right-8 z-[998] flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-card text-white shadow-lg transition hover:border-primary/40 hover:bg-primary"
    >
      <span className="mt-1 size-2.5 rotate-45 border-l border-t border-white" />
    </button>
  )
}

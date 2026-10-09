'use client'

import Link from 'next/link'
import { Download } from 'lucide-react'
import { site } from '@/lib/site'

export default function DownloadAppFloat() {
  return (
    <Link
      href={site.playStoreUrl}
      aria-label="Download the app"
      className="fixed bottom-8 right-8 z-[999] flex h-14 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <Download className="size-5" />
      <span className="hidden sm:inline">Get the app</span>
    </Link>
  )
}

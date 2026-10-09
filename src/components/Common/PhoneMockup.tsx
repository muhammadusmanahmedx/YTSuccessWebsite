'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type PhoneMockupProps = {
  label?: string
  hint?: string
  imageSrc?: string
  className?: string
  float?: boolean
  /** When true, image is already a full device mockup — no extra bezel */
  bare?: boolean
}

/** Phone frame ready for real mockup PNGs under /public/images/mockups/ */
export default function PhoneMockup({
  label = 'Mobile app',
  hint = 'Add mockup image',
  imageSrc,
  className,
  float = false,
  bare = false,
}: PhoneMockupProps) {
  const [hasImage, setHasImage] = useState(Boolean(imageSrc))

  const frame = bare ? (
    <div className={cn('relative w-[260px] sm:w-[300px] lg:w-[320px]', className)}>
      {hasImage && imageSrc ? (
        <Image
          src={imageSrc}
          alt={label}
          width={640}
          height={1280}
          className="h-auto w-full drop-shadow-[0_40px_80px_rgba(245,32,39,0.35)]"
          onError={() => setHasImage(false)}
          priority={float}
        />
      ) : (
        <div className="flex aspect-[9/19] flex-col items-center justify-center gap-3 rounded-[2.4rem] border border-white/15 bg-[#120a0a] px-6 text-center">
          <Image src="/brand/icon.png" alt="" width={56} height={56} className="rounded-2xl" />
          <p className="font-heading text-sm font-semibold text-white">{label}</p>
          <p className="text-xs text-muted-foreground">{hint}</p>
        </div>
      )}
    </div>
  ) : (
    <div className={cn('relative w-[240px] sm:w-[280px]', className)}>
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/15 bg-[#120a0a] p-2 shadow-[0_40px_80px_-20px_rgba(245,32,39,0.45)] ring-1 ring-primary/20">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1a1010] to-[#0d0808]">
          {hasImage && imageSrc ? (
            <Image
              src={imageSrc}
              alt={label}
              fill
              className="object-cover object-top"
              onError={() => setHasImage(false)}
              sizes="280px"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <Image
                src="/brand/icon.png"
                alt=""
                width={64}
                height={64}
                className="rounded-2xl opacity-90"
              />
              <div>
                <p className="font-heading text-sm font-semibold text-white">
                  {label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
                <p className="mt-3 font-mono text-[10px] text-white/30">
                  /images/mockups/
                </p>
              </div>
              <div className="mt-2 w-full space-y-2 opacity-40">
                <div className="h-8 rounded-lg bg-primary/30" />
                <div className="h-20 rounded-lg bg-white/5" />
                <div className="h-12 rounded-lg bg-white/5" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-lg bg-amber/10" />
                  <div className="h-16 rounded-lg bg-primary/10" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  if (!float) return frame

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {frame}
    </motion.div>
  )
}

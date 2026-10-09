'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { site } from '@/lib/site'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-28 sm:pt-36 lg:pb-12 lg:pt-40">
      <div className="container relative max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/brand/icon.png"
            alt=""
            width={48}
            height={48}
            className="mb-6 size-12 rounded-xl"
            priority
          />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Contact our friendly team
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Let us know how we can help — quotes, order issues, complaints, or
            marketplace questions for {site.name}.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

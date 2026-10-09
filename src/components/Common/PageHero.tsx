'use client'

import { motion } from 'framer-motion'

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
      <div className="container relative max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

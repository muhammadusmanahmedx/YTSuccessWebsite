'use client'

import { motion } from 'framer-motion'
import { site } from '@/lib/site'

export default function CeoSection() {
  const { ceo } = site

  return (
    <section className="relative py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/15 via-card/80 to-[#0d0808]"
        >
          <div className="grid items-center gap-8 p-8 md:grid-cols-[240px_1fr] md:gap-12 md:p-12 lg:grid-cols-[280px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#120a0a] lg:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ceo.image}
                alt={ceo.name}
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-heading text-lg font-semibold text-white">
                  {ceo.name}
                </p>
                <p className="text-sm text-amber">{ceo.role}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Leadership
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
                Meet our CEO
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {ceo.bio}
              </p>
              <p className="mt-6 text-sm text-white/50">
                {site.name} is a company registered with the Securities and
                Exchange Commission of Pakistan (SECP).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { team } from '@/lib/site'

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our team
          </p>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Meet the people behind the growth
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Hire great people, give them the tools — and ship reliable YouTube
            growth for operators who expect results.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member, i) => (
            <motion.article
              key={member.name + member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#120a0a] ${
                'featured' in member && member.featured
                  ? 'ring-1 ring-primary/40 sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 size-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/55 px-3 py-3 backdrop-blur-md">
                <h3 className="font-heading text-sm font-semibold text-white sm:text-base">
                  {member.name}
                </h3>
                <p className="text-xs text-amber sm:text-sm">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
          Replace team cards with real photos anytime — drop images under{' '}
          <span className="font-mono text-white/50">public/team/</span> and
          update paths in <span className="font-mono text-white/50">site.ts</span>
          .
        </p>
      </div>
    </section>
  )
}

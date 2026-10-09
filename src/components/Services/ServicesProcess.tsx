'use client'

import { deliveryFramework } from '@/lib/site'

export default function ServicesProcess() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Proven process
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
              Our process for{' '}
              <span className="text-primary">excellent delivery</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              A simple rhythm from first conversation to fulfilled order —
              designed for operators who need clarity and speed.
            </p>
            <div className="relative mt-10 hidden h-40 w-40 lg:block">
              <div className="absolute inset-0 rounded-full border border-primary/30" />
              <div className="absolute inset-6 rounded-full border border-amber/25" />
              <div className="absolute inset-12 rounded-full bg-primary/20" />
            </div>
          </div>

          <ol className="space-y-6">
            {deliveryFramework.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/8 pb-6 last:border-0 last:pb-0"
              >
                <span className="font-heading text-4xl font-semibold text-white/15 sm:text-5xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

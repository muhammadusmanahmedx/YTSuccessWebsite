'use client'

import { CheckCircle2 } from 'lucide-react'
import { deliveryFramework } from '@/lib/site'

export interface TimelineStep {
  title: string
  description: string
}

export interface PathToResilienceOrbitalTimelineProps {
  title?: string
  eyebrow?: string
  description?: string
  steps?: TimelineStep[]
}

export default function PathToResilienceOrbitalTimeline({
  title = 'A delivery rhythm your channel can follow.',
  eyebrow = 'How we work',
  description = 'A clear sequence keeps strategy, fulfillment, and growth connected — from the first order to long-term scale.',
  steps = [...deliveryFramework],
}: PathToResilienceOrbitalTimelineProps) {
  return (
    <section
      aria-labelledby="orbital-timeline-title"
      className="relative overflow-hidden px-6 py-20 text-foreground sm:px-10 lg:py-28"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h2
            id="orbital-timeline-title"
            className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </div>

        <ol className="relative space-y-6 border-l-2 border-primary/40 pl-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-card/70 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-primary/30"
            >
              <span className="absolute -left-[2.85rem] top-6 grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-white ring-4 ring-background">
                {index + 1}
              </span>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber"
                />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

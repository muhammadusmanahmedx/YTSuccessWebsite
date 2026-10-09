'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { testimonials as siteTestimonials } from '@/lib/site'

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

const testimonials: Testimonial[] = siteTestimonials

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6 transition-colors duration-300"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? 'true' : 'false'}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(245, 32, 39, 0.18), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(245, 32, 39, 0.18), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  className="group max-w-xs w-full cursor-default select-none rounded-3xl border border-white/10 bg-card/80 p-8 shadow-lg shadow-black/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:p-10"
                >
                  <blockquote className="m-0 p-0">
                    <p className="m-0 font-normal leading-relaxed text-muted-foreground transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="mt-6 flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        width={48}
                        height={48}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="size-12 shrink-0 rounded-full object-cover ring-2 ring-white/15 transition-all duration-300 ease-in-out group-hover:ring-primary/50"
                        loading="lazy"
                      />
                      <div className="flex min-w-0 flex-col">
                        <cite className="truncate font-semibold not-italic leading-5 tracking-tight text-white transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="mt-0.5 truncate text-sm leading-5 tracking-tight text-amber transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  )
}

export default function TestimonialV2() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-transparent py-20 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="mx-auto mb-16 flex max-w-[540px] flex-col items-center justify-center">
          <div className="flex justify-center">
            <div className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary transition-colors">
              Testimonials
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="mt-6 text-center font-heading text-4xl font-semibold tracking-tight text-white transition-colors md:text-5xl"
          >
            What our clients say
          </h2>
          <p className="mt-5 max-w-sm text-center text-lg leading-relaxed text-muted-foreground transition-colors">
            Channel operators, creators, and networks growing with YT Success
            Studio.
          </p>
        </div>

        <div
          className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  )
}

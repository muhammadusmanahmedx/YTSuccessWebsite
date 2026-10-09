import type { Metadata } from 'next'
import Hero from '@/components/Home/Hero'
import ServicesPreview from '@/components/Home/ServicesPreview'
import JourneyTeaser from '@/components/Home/JourneyTeaser'
import AppPromo from '@/components/Home/AppPromo'
import Testimonials from '@/components/Home/Testimonials'
import Faq from '@/components/Home/Faq'
import ContactCta from '@/components/Home/ContactCta'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <JourneyTeaser />
      <AppPromo />
      <Testimonials />
      <Faq />
      <ContactCta />
    </main>
  )
}

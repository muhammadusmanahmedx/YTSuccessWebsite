import type { Metadata } from 'next'
import ServicesHero from '@/components/Services/ServicesHero'
import ServicesStats from '@/components/Services/ServicesStats'
import ServicesGrid from '@/components/Services/ServicesGrid'
import ServicesProcess from '@/components/Services/ServicesProcess'
import ServicesCta from '@/components/Services/ServicesCta'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description: `YouTube watch time, subscribers, channel monetization, and buy/sell channel marketplace services from ${site.name}.`,
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesStats />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCta />
    </main>
  )
}

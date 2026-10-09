export const site = {
  name: 'YT Success Studio',
  tagline: 'YouTube growth, delivered.',
  description:
    'Watch time, subscribers, channel monetization, and marketplace services — backed by seven years of YouTube growth expertise. Order everything from the YT Success Studio mobile app.',
  yearsInBusiness: 7,
  email: 'contact.ytsuccessstudio@gmail.com',
  /** Pakistan mobile without + for wa.me */
  whatsapp: '923330537972',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp}`
  },
  get mailtoUrl() {
    return `mailto:${this.email}`
  },
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.ytsuccessstudio.app',
  appStoreUrl: '#',
  privacyUrl: 'https://play.google.com/store/apps/details?id=com.ytsuccessstudio.app',
  /** Securities and Exchange Commission of Pakistan */
  secpRegistered: true,
  secpLabel: 'Registered with SECP',
  ceo: {
    name: 'Usman Ali',
    role: 'Founder & CEO',
    bio: 'Leading YT Success Studio for seven years — from hands-on YouTube growth delivery to a full mobile product and marketplace for creators and operators across Pakistan and beyond.',
    image:
      'https://api.dicebear.com/9.x/initials/svg?seed=Usman%20Ali&backgroundColor=f52027&textColor=ffffff&fontSize=40',
  },
} as const

export const team = [
  {
    name: 'Usman Ali',
    role: 'Founder & CEO',
    image:
      'https://api.dicebear.com/9.x/initials/svg?seed=Usman%20Ali&backgroundColor=f52027&textColor=ffffff&fontSize=36',
    featured: true,
  },
  {
    name: 'Delivery Ops',
    role: 'Fulfillment lead',
    image:
      'https://api.dicebear.com/9.x/initials/svg?seed=Delivery&backgroundColor=1a1313&textColor=ffb020&fontSize=36',
  },
  {
    name: 'Customer Success',
    role: 'Support & tickets',
    image:
      'https://api.dicebear.com/9.x/initials/svg?seed=Success&backgroundColor=241a1a&textColor=f4ecea&fontSize=36',
  },
  {
    name: 'Growth Desk',
    role: 'Monetization specialists',
    image:
      'https://api.dicebear.com/9.x/initials/svg?seed=Growth&backgroundColor=170f10&textColor=f52027&fontSize=36',
  },
  {
    name: 'Marketplace',
    role: 'Channel buy & sell',
    image:
      'https://api.dicebear.com/9.x/initials/svg?seed=Market&backgroundColor=1a1313&textColor=ffb020&fontSize=36',
  },
] as const

export const deliveryFramework = [
  {
    title: 'Understand',
    description:
      'Clarify your channel goal — watch hours, subscribers, monetization, or a marketplace deal.',
  },
  {
    title: 'Package',
    description:
      'Pick the right service in the app with transparent quantities and wallet-ready checkout.',
  },
  {
    title: 'Deliver',
    description:
      'Our ops team fulfills with tracking, status updates, and support tickets when you need us.',
  },
  {
    title: 'Scale',
    description:
      'Repeat across channels, grow with confidence, and expand into buy/sell when you are ready.',
  },
] as const

export type ServiceId =
  | 'watch-time'
  | 'subscribers'
  | 'monetization'
  | 'buy-channel'
  | 'sell-channel'

export const services: {
  id: ServiceId
  name: string
  short: string
  description: string
  highlight: string
  priceLabel: string
  icon: 'play' | 'users' | 'badge' | 'shopping' | 'tag'
}[] = [
  {
    id: 'watch-time',
    name: 'YouTube Watch Time',
    short: 'Boost hours',
    description:
      'Grow qualifying watch hours for monetization and ranking. Bulk multi-channel orders supported with clear reporting on long-form videos.',
    highlight: 'From 500 hours · starting Rs 30 / hour',
    priceLabel: 'Rs 30 / hour',
    icon: 'play',
  },
  {
    id: 'subscribers',
    name: 'YouTube Subscribers',
    short: 'Grow your channel',
    description:
      'Build a stronger subscriber base toward monetization thresholds. Simple channel-link ordering with flexible quantities.',
    highlight: 'Min 100 subscribers · Rs 2 / subscriber',
    priceLabel: 'Rs 2 / subscriber',
    icon: 'users',
  },
  {
    id: 'monetization',
    name: 'Channel Monetization',
    short: 'Unlock revenue',
    description:
      'A packaged path to YouTube Partner Program readiness — watch hours, subscribers, and dedicated monetization support in one order.',
    highlight: 'Package fee from Rs 12,299 + hours & subs',
    priceLabel: 'From Rs 12,299',
    icon: 'badge',
  },
  {
    id: 'buy-channel',
    name: 'Buy Channels',
    short: 'Verified marketplace',
    description:
      'Browse verified YouTube channels with analytics, ownership transfer, and growth-focused listings across niches.',
    highlight: 'Verified channels · ownership transfer',
    priceLabel: 'Marketplace pricing',
    icon: 'shopping',
  },
  {
    id: 'sell-channel',
    name: 'Sell Channels',
    short: 'List & transfer',
    description:
      'List your channel for sale with structured handoff — interest tracking, bidding options, and secure ownership transfer.',
    highlight: 'List, bid, and transfer with support',
    priceLabel: 'Commission-based',
    icon: 'tag',
  },
]

export const journey = [
  {
    year: '2018',
    title: 'The beginning',
    body: 'YT Success Studio started as a focused YouTube growth operation — helping creators and operators unlock watch time and audience growth with hands-on delivery.',
  },
  {
    year: '2019–2022',
    title: 'Scaling delivery',
    body: 'Years of fulfillment across thousands of channel goals. Processes for watch time, subscribers, and monetization packages matured into a reliable growth engine.',
  },
  {
    year: '2023–2025',
    title: 'Product & trust',
    body: 'Wallet-based ordering, support tickets, and operator tooling made fulfillment transparent — so customers could track every order from request to completion.',
  },
  {
    year: '2026',
    title: 'App & marketplace era',
    body: 'We expanded the domain with a full mobile app and channel marketplace — buy, sell, order services, manage funds, and get support in one branded experience.',
  },
]

export const testimonials = [
  {
    text: 'Watch time landed on schedule and the monetization package was clear from day one. Support actually replied with updates — rare in this space.',
    name: 'Ahmed R.',
    role: 'Channel operator',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    text: 'We run multiple channels. Bulk ordering from the app saved us hours, and pricing stayed consistent with what was quoted.',
    name: 'Sara K.',
    role: 'Network manager',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    text: 'Seven years shows. They know YPP thresholds, long-form requirements, and how to package what you actually need.',
    name: 'Bilal M.',
    role: 'Creator',
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    text: 'Bought a verified channel through their marketplace. Transfer was smooth and analytics matched what was listed.',
    name: 'Omar H.',
    role: 'Channel buyer',
    image: 'https://i.pravatar.cc/150?img=15',
  },
  {
    text: 'Wallet top-ups with JazzCash worked in minutes. Tracking orders in the app beats chasing people on chat.',
    name: 'Zainab A.',
    role: 'Reseller',
    image: 'https://i.pravatar.cc/150?img=45',
  },
  {
    text: 'Subscriber + watch-time combo got our niche channel ready for monetization review without guesswork.',
    name: 'Hassan T.',
    role: 'YouTube operator',
    image: 'https://i.pravatar.cc/150?img=68',
  },
  {
    text: 'Support tickets with screenshots made everything clear. Felt like a real ops team, not a black box.',
    name: 'Fatima N.',
    role: 'Agency lead',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    text: 'Listed our channel for sale and got serious interest. Hand-off process was structured and professional.',
    name: 'Usman K.',
    role: 'Channel seller',
    image: 'https://i.pravatar.cc/150?img=59',
  },
  {
    text: 'Switched our whole network to the app. Postpaid for trusted accounts + prepaid wallet covers every case.',
    name: 'Ayesha M.',
    role: 'Multi-channel owner',
    image: 'https://i.pravatar.cc/150?img=25',
  },
]

export const faqs = [
  {
    q: 'What services do you offer?',
    a: 'YouTube watch time, subscribers, channel monetization packages, plus buy and sell channel marketplace services — all orderable through the YT Success Studio mobile app.',
  },
  {
    q: 'How do I place an order?',
    a: 'Download the mobile app, create an account, top up your wallet (card, EasyPaisa, JazzCash, or Binance), then place an order for the service you need.',
  },
  {
    q: 'Do you help with monetization?',
    a: 'Yes. Our monetization package combines watch hours, subscribers, and a dedicated fee so your channel can progress toward YouTube Partner Program readiness.',
  },
  {
    q: 'How can I contact you?',
    a: 'Use the Contact page to submit a query or complaint ticket, or open a support ticket inside the mobile app for order-related help.',
  },
]

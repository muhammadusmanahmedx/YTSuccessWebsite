import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/brand/icon.png"
        alt={`${site.name} logo`}
        width={40}
        height={40}
        className="size-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105 sm:size-10"
        priority
      />
      <span className="font-heading text-base font-semibold tracking-tight text-white sm:text-lg">
        YT Success <span className="text-primary">Studio</span>
      </span>
    </Link>
  )
}

export default Logo

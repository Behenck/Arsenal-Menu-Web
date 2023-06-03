import { UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

interface CardItemProps {
  title: string
  href?: string
}

export function CardItem({ title, href = '/' }: CardItemProps) {
  return (
    <Link href={href}>
      <div className="bg-blue-900 hover:bg-blue-950 transition-colors w-40 h-40 lg:w-56 lg:h-56 rounded-xl flex flex-col justify-center items-center text-gray-50">
        {/* <Image src={cardapioLogo} width={75} height={75} alt="" /> */}
        <div className="h-full flex items-center justify-center">
          <UtensilsCrossed className="w-12 h-12 lg:w-20 lg:h-20" />
        </div>
        <div className="w-full p-4 bg-blue-950 rounded-ee-xl rounded-bl-xl">
          <p className="text-base lg:text-xl">{title}</p>
        </div>
      </div>
    </Link>
  )
}

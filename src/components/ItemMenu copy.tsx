import Image, { StaticImageData } from 'next/image'
import { ShoppingCart } from 'lucide-react'

interface ItemMenuProps {
  title: string
  content: string
  image: StaticImageData
}

export function ItemMenu({ content, image, title }: ItemMenuProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex gap-4">
        <Image
          src={image}
          width={85}
          height={85}
          alt=""
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg">{title}</p>
          <p className="text-sm text-gray-300 leading-4">{content}</p>
        </div>
      </div>
      <button className="h-full w-20 rounded text-gray-50 flex items-center justify-center hover:text-orange-500 transition-colors">
        <ShoppingCart />
      </button>
    </div>
  )
}

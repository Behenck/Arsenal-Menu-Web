import Image, { StaticImageData } from 'next/image'

interface ItemMenuProps {
  title: string
  image: StaticImageData
  price: number
}

export function ItemMenu({ image, title, price }: ItemMenuProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col gap-2 w-[118px] lg:w-[150px] cursor-pointer transition-all hover:brightness-95">
      <Image src={image} alt="" className="h-28 lg:h-36" />
      <div className="p-2">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-base font-bold">R$ {price},00</p>
      </div>
    </div>
  )
}

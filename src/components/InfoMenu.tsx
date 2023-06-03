import Image, { StaticImageData } from 'next/image'

interface InfoMenuProps {
  title: string
  image: StaticImageData
}

export function InfoMenu({ image, title }: InfoMenuProps) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer transition-all hover:brightness-90">
      <div className="rounded-full border-[3px] border-gray-200 w-24 h-24 overflow-hidden flex items-center justify-center">
        <Image src={image} width={100} height={100} alt="" />
      </div>
      <p className="text-gray-500 font-bold">{title}</p>
    </div>
  )
}

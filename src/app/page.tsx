import { CardItem } from '@/components/CardItem'

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-8 h-screen bg-[url(../assets/Background.png)] bg-center bg-cover">
      <div className="grid grid-cols-2 gap-5">
        <CardItem title="Cardápio" href="/menu" />
        <CardItem title="Horários" />
        <CardItem title="Placar" />
        <CardItem title="Time" />
      </div>
    </div>
  )
}

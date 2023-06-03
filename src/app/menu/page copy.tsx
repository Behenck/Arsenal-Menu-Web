import { ItemMenu } from '@/components/ItemMenu'
import SanduicheImage from '../../assets/sanduiche.jpg'
import PizzaImage from '../../assets/pizza.jpg'

export default function Menu() {
  return (
    <>
      <header className="flex items-center justify-center p-8">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Cardápio
        </h1>
      </header>
      <div className="flex flex-col gap-4 p-2 min-h-screen">
        <ItemMenu
          image={SanduicheImage}
          title="Sanduíche"
          content="Frango com requeijão tomate e alface"
        />
        <ItemMenu
          image={PizzaImage}
          title="Pizza"
          content="calabreza com queijo"
        />
        <ItemMenu
          image={SanduicheImage}
          title="Sanduíche"
          content="Frango com requeijão tomate e alface"
        />
        <ItemMenu
          image={SanduicheImage}
          title="Sanduíche"
          content="Frango com requeijão tomate e alface"
        />
        <ItemMenu
          image={SanduicheImage}
          title="Sanduíche"
          content="Frango com requeijão tomate e alface"
        />
        <ItemMenu
          image={SanduicheImage}
          title="Sanduíche"
          content="Frango com requeijão tomate e alface"
        />
      </div>
    </>
  )
}

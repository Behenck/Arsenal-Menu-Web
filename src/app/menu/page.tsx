import SanduicheImage from '../../assets/sanduiche.jpg'
import PizzaImage from '../../assets/pizza.jpg'
import BoloImage from '../../assets/bolo.jpg'
import BebidasImage from '../../assets/bebidas.png'
import { InfoMenu } from '@/components/InfoMenu'
import { ItemMenu } from '@/components/ItemMenu'
import { PlusCircle, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { CreateMenuModal } from '@/components/CreateMenuModal'
import { CartModal } from '@/components/CartModal'

export default function Menu() {
  return (
    <div className="h-screen bg-white">
      <header className="flex items-center justify-center gap-2 flex-col">
        <div className="flex justify-between items-center w-full pt-2 px-4">
          <Link
            href="/"
            className="text-xl text-gray-400 hover:text-gray-500 transition-colors"
          >
            Voltar
          </Link>

          <CreateMenuModal>
            <button className="flex items-center justify-end text-gray-400 hover:text-gray-500 transition-colors">
              <PlusCircle />
            </button>
          </CreateMenuModal>
        </div>
        <div className="bg-blue-900 h-14 text-gray-50 text-2xl flex items-center justify-center w-full">
          <p>Cardápio</p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <InfoMenu image={SanduicheImage} title="Lanches" />
          <InfoMenu image={BebidasImage} title="Bebidas" />
          <InfoMenu image={BoloImage} title="Sobremesas" />
        </div>
      </header>

      <div className="bg-gray-100/50 h-3 mt-5 rounded-full"></div>

      <main className="flex flex-wrap gap-3 mt-5 p-4 items-center">
        <ItemMenu image={SanduicheImage} price={4} title="Sanduíche" />
        <ItemMenu image={PizzaImage} price={4} title="Pizza" />
        <ItemMenu image={SanduicheImage} price={4} title="Sanduíche" />
        <ItemMenu image={SanduicheImage} price={4} title="Sanduíche" />
      </main>

      <footer className="w-full justify-end flex items-end p-4">
        <CartModal>
          <button className="flex items-center justify-center py-4 px-12 bg-blue-500 hover:bg-blue-600 transition-all text-white rounded-lg">
            <ShoppingCart />
          </button>
        </CartModal>
      </footer>
    </div>
  )
}

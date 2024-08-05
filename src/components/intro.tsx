import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'

import CoffeeIntroImage from '../assets/coffee-intro.png'

export function Intro() {
  return (
    <section className="h-[544px] w-full bg-intro px-40 py-24">
      <div className="flex size-full space-x-14">
        <main>
          <div className="space-y-4">
            <h1 className="font-baloo text-5xl font-extrabold">
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <h4 className="text-xl text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </h4>
          </div>
          <div className="mt-[66px] grid h-20 w-[567px] grid-cols-[45%_55%] gap-y-5 text-base">
            <p className="flex items-center gap-3">
              <ShoppingCart
                className="rounded-full bg-yellow-dark stroke-white p-2"
                size={32}
              />
              Compra simples e segura
            </p>
            <p className="flex items-center gap-3">
              <Package
                className="rounded-full bg-base-text stroke-white p-2"
                size={32}
              />
              Embalagem mantém o café intacto
            </p>
            <p className="flex items-center gap-3">
              <Timer
                className="rounded-full bg-yellow-default stroke-white p-2"
                size={32}
              />
              Entrega rápida e rastreada
            </p>
            <p className="flex items-center gap-3">
              <Coffee
                className="rounded-full bg-purple-default stroke-white p-2"
                size={32}
              />
              O café chega fresquinho até você
            </p>
          </div>
        </main>
        <img src={CoffeeIntroImage} alt="Imagem de café" />
      </div>
    </section>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { useContext } from 'react'

import { CoffeeCard } from '@/components/coffee-card'
import { Intro } from '@/components/intro'
import { CoffeeContext } from '@/contexts/coffee-context'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { coffees: coffee, handleQuantity } = useContext(CoffeeContext)
  return (
    <>
      <Intro />

      <main className="px-40 py-8">
        <h2 className="font-baloo text-[30px] font-extrabold leading-[1.3]">
          Nossos cafés
        </h2>
        <section className="mt-[54px] flex flex-wrap gap-x-8 gap-y-10">
          {coffee.map(
            ({ id, name, description, type, price, imageUrl, quantity }) => (
              <CoffeeCard
                key={id}
                id={id}
                name={name}
                description={description}
                type={type}
                price={price}
                imageUrl={imageUrl}
                quantity={quantity}
                handleQuantity={handleQuantity}
              />
            ),
          )}
        </section>
      </main>
    </>
  )
}

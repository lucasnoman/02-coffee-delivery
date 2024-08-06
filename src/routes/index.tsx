import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { coffeList } from '@/backend/coffe-list'
import { CoffeeCard } from '@/components/coffee-card'
import { Intro } from '@/components/intro'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [coffee, setCoffee] = useState(coffeList)

  function handleQuantity(id: number, operation: 'sum' | 'sub') {
    let updatedList: typeof coffeList

    if (operation === 'sum') {
      updatedList = coffeList.map((coffe) => {
        if (coffe.id === id) {
          return { ...coffe, quantity: (coffe.quantity += 1) }
        }
        return coffe
      })
    } else {
      updatedList = coffeList.map((coffe) => {
        if (coffe.id === id) {
          if (coffe.quantity === 0) return coffe
          return { ...coffe, quantity: (coffe.quantity -= 1) }
        }
        return coffe
      })
    }

    setCoffee(updatedList)
  }

  return (
    <>
      <Intro />

      <main className="border px-40 py-8">
        <h2 className="font-baloo text-[30px] font-extrabold leading-[1.3]">
          Nossos cafés
        </h2>
        <section className="mt-[54px] flex flex-wrap gap-x-8 gap-y-10">
          {coffee.map(
            ({ id, name, description, price, imageUrl, quantity }) => (
              <CoffeeCard
                key={id}
                id={id}
                name={name}
                description={description}
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

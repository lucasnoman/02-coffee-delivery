import { createContext, ReactNode, useState } from 'react'

import { coffeeList } from '@/backend/coffe-list'

export type CoffeeContextType = {
  coffees: typeof coffeeList
  handleQuantity: (id: number, operation: 'sum' | 'sub') => void
  removeCoffee: (id: number) => void
}
export const CoffeeContext = createContext({} as CoffeeContextType)

type CoffeeContextProviderProps = {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffee] = useState(coffeeList)

  function handleQuantity(id: number, operation: 'sum' | 'sub') {
    let updatedList: typeof coffeeList

    if (operation === 'sum') {
      updatedList = coffeeList.map((eachCoffee) => {
        if (eachCoffee.id !== id) return eachCoffee

        return { ...eachCoffee, quantity: (eachCoffee.quantity += 1) }
      })
    } else {
      updatedList = coffeeList.map((coffee) => {
        if (coffee.id !== id || coffee.quantity === 0) return coffee

        return { ...coffee, quantity: (coffee.quantity -= 1) }
      })
    }

    setCoffee(updatedList)
  }

  function removeCoffee(id: number) {
    setCoffee((state) => state.filter((coffee) => coffee.id !== id))
  }

  return (
    <CoffeeContext.Provider value={{ coffees, handleQuantity, removeCoffee }}>
      {children}
    </CoffeeContext.Provider>
  )
}

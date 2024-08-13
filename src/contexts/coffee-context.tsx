import { createContext, ReactNode, useState } from 'react'

import { coffeeList } from '@/backend/coffe-list'

type CoffeeContextType = {
  coffee: typeof coffeeList
  handleQuantity: (id: number, operation: 'sum' | 'sub') => void
}
export const CoffeeContext = createContext({} as CoffeeContextType)

type CoffeeContextProviderProps = {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffee, setCoffee] = useState(coffeeList)

  function handleQuantity(id: number, operation: 'sum' | 'sub') {
    let updatedList: typeof coffeeList

    if (operation === 'sum') {
      updatedList = coffeeList.map((eachCoffee) => {
        if (eachCoffee.id === id) {
          return { ...eachCoffee, quantity: (eachCoffee.quantity += 1) }
        }
        return eachCoffee
      })
    } else {
      updatedList = coffeeList.map((coffee) => {
        if (coffee.id === id) {
          if (coffee.quantity === 0) return coffee
          return { ...coffee, quantity: (coffee.quantity -= 1) }
        }
        return coffee
      })
    }

    setCoffee(updatedList)
  }

  return (
    <CoffeeContext.Provider value={{ coffee, handleQuantity }}>
      {children}
    </CoffeeContext.Provider>
  )
}

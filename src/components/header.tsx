import { Link } from '@tanstack/react-router'
import { MapPin, ShoppingCart } from 'lucide-react'
import { useContext } from 'react'

import { CoffeeContext } from '@/contexts/coffee-context'

import logo from '../assets/logo.png'
import { Button } from './ui/button'

export function Header() {
  const { coffees: coffee } = useContext(CoffeeContext)

  const coffeeAmount = coffee.reduce((accumulator, coffeeDetails) => {
    coffeeDetails.quantity !== 0 && (accumulator += coffeeDetails.quantity)
    return accumulator
  }, 0)

  return (
    <div className="flex w-full justify-between px-40 py-8">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex items-center gap-3">
        <span className="rounded-md bg-purple-light p-2 text-sm text-purple-default">
          <MapPin className="inline" size={22} /> Belo Horizonte, MG
        </span>
        <Link to="/checkout">
          <Button className="relative bg-yellow-light p-2 hover:bg-yellow-light/70">
            <ShoppingCart size={22} className="stroke-yellow-dark" />
            <span className="absolute -right-2 -top-2 size-5 rounded-full bg-yellow-dark text-center">
              {coffeeAmount}
            </span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

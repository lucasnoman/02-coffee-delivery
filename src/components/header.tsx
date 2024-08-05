import { MapPin, ShoppingCart } from 'lucide-react'

import logo from '../assets/logo.png'
import { Button } from './ui/button'

export function Header() {
  return (
    <div className="flex w-full justify-between px-40 py-8">
      <img src={logo} alt="logo" />

      <div className="flex items-center gap-3">
        <span className="rounded-md bg-purple-light p-2 text-sm text-purple-default">
          <MapPin className="inline" size={22} /> Belo Horizonte, MG
        </span>
        <Button className="bg-yellow-light p-2">
          <ShoppingCart size={22} className="stroke-yellow-dark" />
        </Button>
      </div>
    </div>
  )
}

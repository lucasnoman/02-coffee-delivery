import { Trash } from 'lucide-react'
import { useContext } from 'react'

import { CoffeeContext } from '@/contexts/coffee-context'
import { transformCurrency } from '@/shared/utils'

import { AddSubButton } from './AddRemoveButton'
import { Button } from './ui/button'

type CheckoutCardProps = {
  id: number
  name: string
  imageUrl: string
  quantity: number
  price: number
}

export function CheckoutCard({
  id,
  name,
  imageUrl,
  quantity,
  price,
}: CheckoutCardProps) {
  const { removeCoffee } = useContext(CoffeeContext)

  return (
    <>
      <div className="relative flex gap-5 p-2">
        <span className="absolute right-0 font-bold text-base-text">
          {transformCurrency(price)}
        </span>
        <img src={imageUrl} alt={name} className="size-16" />

        <div className="space-y-2">
          <h2 className="text-base text-base-subtitle">{name}</h2>
          <div className="flex gap-2">
            <AddSubButton id={id} quantity={quantity} />
            <Button className="space-x-1 bg-base-button text-base-text hover:bg-base-hover">
              <Trash className="inline stroke-purple-default" size={20} />
              <span onClick={() => removeCoffee(id)}>REMOVER</span>
            </Button>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-[368px] border bg-base-button" />
    </>
  )
}

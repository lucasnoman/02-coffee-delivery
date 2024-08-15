import { useContext } from 'react'

import { CoffeeContext } from '@/contexts/coffee-context'

import { Button } from './ui/button'

type AddRemoveButtonProps = {
  id: number
  quantity: number
}
export function AddSubButton({ id, quantity }: AddRemoveButtonProps) {
  const { handleQuantity } = useContext(CoffeeContext)

  return (
    <div className="w-fit rounded-md bg-base-button">
      <Button
        className="w-3 text-xl leading-[1.3] text-purple-default hover:bg-base-button hover:text-purple-dark"
        variant={'ghost'}
        onClick={() => handleQuantity(id, 'sub')}
      >
        -
      </Button>
      <span className="text-base">{quantity}</span>
      <Button
        className="w-3 text-xl leading-[1.3] text-purple-default hover:bg-base-button hover:text-purple-dark"
        variant={'ghost'}
        onClick={() => handleQuantity(id, 'sum')}
      >
        +
      </Button>
    </div>
  )
}

import { ShoppingCart } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

type CoffeeCardProps = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  quantity: number
  handleQuantity: (id: number, operation: 'sum' | 'sub') => void
}

export function CoffeeCard({
  id,
  name,
  description,
  price,
  imageUrl,
  quantity,
  handleQuantity,
}: CoffeeCardProps) {
  return (
    <Card className="h-[310px] w-64 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card">
      <CardHeader>
        <img
          className="mx-auto -mt-10 size-[120px]"
          src={imageUrl}
          alt="Café expresso"
        />
        <Badge className="mx-auto mb-4 mt-3 w-fit bg-yellow-light text-[10px] text-yellow-default">
          TRADICIONAL
        </Badge>
        <CardTitle className="mb-2 mt-4 text-center font-baloo text-xl">
          {name}
        </CardTitle>
        <CardDescription className="mb-8 mt-2 text-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mb-5 mt-[33px] flex justify-between">
        <p>
          <span className="text-sm leading-[1.3]">R$ </span>
          <span className="font-baloo text-2xl font-extrabold leading-[1.3] text-base-text antialiased">
            {price.toFixed(2)}
          </span>
        </p>
        <div className="flex gap-2">
          <div className="rounded-md bg-base-button">
            <Button
              className="w-3 text-purple-default hover:bg-base-button hover:text-purple-dark"
              variant={'ghost'}
              onClick={() => handleQuantity(id, 'sub')}
            >
              -
            </Button>
            <span className="text-base">{quantity}</span>
            <Button
              className="w-3 text-purple-default hover:bg-base-button hover:text-purple-dark"
              variant={'ghost'}
              onClick={() => handleQuantity(id, 'sum')}
            >
              +
            </Button>
          </div>
          <Button className="bg-purple-dark p-2 hover:bg-purple-default">
            <ShoppingCart size={22} className="stroke-white" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute, Link } from '@tanstack/react-router'
import { DollarSign, MapPinHouse } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CheckoutCard } from '@/components/CheckoutCard'
import { Button } from '@/components/ui/button'
import { CoffeeContext } from '@/contexts/coffee-context'
import { transformCurrency } from '@/shared/utils'

import { AddressForm } from './-AddressForm.tsx'
import { addressSchema } from './-AddressType.ts'
import { PaymentForm } from './-PaymentForm.tsx'

export const Route = createFileRoute('/checkout/')({
  component: ConfirmationPage,
})

type FormDataType = z.infer<typeof addressSchema>

const FormSchema = z.object({
  paymentType: z.enum(['credit', 'debit', 'cash'], {
    required_error: 'You need to select a payment type.',
  }),
})

export function ConfirmationPage() {
  const { coffees } = useContext(CoffeeContext)

  const deliveryTax = 3.5
  const totalValue = coffees.reduce((accumulator, coffee) => {
    return accumulator + coffee.price * coffee.quantity
  }, 0)
  const totalValueWithTax = totalValue + deliveryTax

  const addressForm = useForm<FormDataType>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })
  const paymentForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function handleForm(): object {
    const addressFormValues = addressForm.getValues()
    const paymentFormValues = paymentForm.getValues()

    return { addressFormValues, paymentFormValues }
  }

  return (
    <main className="mx-40 mb-32 flex justify-between">
      <article className="w-[640px]">
        <h1 className="font-baloo text-lg font-bold leading-[1.3]">
          Complete seu pedido
        </h1>

        <section className="my-[15px] space-y-8 rounded-md bg-base-card p-10">
          <header className="flex items-start gap-2">
            <MapPinHouse size={22} className="stroke-yellow-dark" />
            <span className="space-y-[2px]">
              <p className="text-base text-base-subtitle">
                Endereço de Entrega
              </p>
              <p className="text-sm leading-[1.3] text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </span>
          </header>

          <AddressForm addressForm={addressForm} />
        </section>

        <section className="space-y-8 rounded-md bg-base-card p-10">
          <header className="flex items-start gap-2">
            <DollarSign size={22} className="stroke-purple-default" />
            <span className="space-y-[2px]">
              <p className="text-base text-base-subtitle">Pagamento</p>
              <p className="text-sm leading-[1.3] text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </header>

          <PaymentForm paymentForm={paymentForm} />
        </section>
      </article>

      <aside className="w-[448px]">
        <h1 className="font-baloo text-lg font-bold leading-[1.3]">
          Cafés selecionados
        </h1>
        <div className="my-[15px] w-[448px] space-y-6 rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
          {coffees.map(({ id, name, imageUrl, quantity, price }) => {
            if (quantity === 0) return null

            return (
              <CheckoutCard
                key={id}
                id={id}
                name={name}
                imageUrl={imageUrl}
                quantity={quantity}
                price={price * quantity}
              />
            )
          })}

          <section
            className={`space-y-3 ${
              coffees.every((coffee) => coffee.quantity === 0) ? '' : 'pt-6'
            } text-sm text-base-text`}
          >
            <p className="flex justify-between">
              <span>Total de itens</span>
              <span>{transformCurrency(totalValue)}</span>
            </p>
            <p className="flex justify-between">
              <span>Entrega</span>
              <span>{transformCurrency(deliveryTax)}</span>
            </p>
            <p className="flex justify-between text-xl font-bold text-base-subtitle">
              <span className="">Total</span>
              <span>{transformCurrency(totalValueWithTax)}</span>
            </p>
          </section>

          <Button className="w-full" onClick={handleForm}>
            <Link to="">CONFIRMAR PEDIDO</Link>
          </Button>
        </div>
      </aside>
    </main>
  )
}

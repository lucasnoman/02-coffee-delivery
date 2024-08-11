import { createFileRoute } from '@tanstack/react-router'
import { DollarSign, MapPinHouse } from 'lucide-react'

import { AddressForm } from './-AddressForm'
import { PaymentForm } from './-PaymentForm'

export const Route = createFileRoute('/confirmation/')({
  component: ConfirmationPage,
})

export function ConfirmationPage() {
  return (
    <main className="mx-40 mb-32 flex justify-between border">
      <article className="w-[640px] border border-red-500">
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

          <AddressForm />
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

          <PaymentForm />
        </section>
      </article>

      <aside className="w-[448px] border border-green-500">
        <h1 className="font-baloo text-lg font-bold leading-[1.3]">
          Cafés selecionados
        </h1>
      </aside>
    </main>
  )
}

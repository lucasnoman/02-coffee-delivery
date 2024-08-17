import { createFileRoute } from '@tanstack/react-router'
import { CircleDollarSign, MapPin, Timer } from 'lucide-react'
import { z } from 'zod'

import confirmedOrder from '../../assets/confirmed-order.png'
import { addressSchema } from '../checkout/-AddressType'

export const Route = createFileRoute('/success/$data')({
  component: ConfirmationPage,
})

enum Payment {
  credit = 'Cartão de Crédito',
  debit = 'Cartão de Débito',
  cash = 'Dinheiro',
}

type ConfirmationPageProps = {
  data: string
}

type ParsedData = {
  addressFormValues: z.infer<typeof addressSchema>
  paymentFormValues: { paymentType: keyof typeof Payment }
}

export function ConfirmationPage() {
  const { data } = Route.useParams<ConfirmationPageProps>()
  const parsedData = JSON.parse(data) as ParsedData

  const { rua, numero, bairro, cidade, uf } = parsedData.addressFormValues
  const { paymentType } = parsedData.paymentFormValues

  return (
    <div className="p-40">
      <h1 className="block font-baloo text-[32px] font-extrabold leading-[1.3] text-yellow-dark">
        Uhu! Pedido confirmado
      </h1>
      <h2 className="my-1 text-xl text-base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </h2>
      <main className="my-10 flex items-center gap-[102px]">
        <section className="flex h-[270px] w-full items-center justify-between rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-gradient-to-br from-yellow-default to-purple-default p-[2px]">
          <div className="size-full space-y-6 rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-base-background p-10">
            <div className="flex items-center gap-3">
              <MapPin
                size={22}
                className="box-content rounded-full bg-purple-default stroke-white p-2"
              />
              <p>
                Entrega em{' '}
                <strong>
                  {rua}, {numero}
                </strong>{' '}
                <br />
                {bairro} - {cidade}, {uf}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Timer
                size={22}
                className="box-content rounded-full bg-yellow-default stroke-white p-2"
              />

              <p>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CircleDollarSign
                size={22}
                className="box-content rounded-full bg-yellow-dark stroke-white p-2"
              />
              <p>
                Pagamento na entrega <br />{' '}
                <strong>{Payment[paymentType]}</strong>
              </p>
            </div>
          </div>
        </section>
        <section className="h-[293px] w-full">
          <img
            src={confirmedOrder}
            alt="Confirmed order"
            className="h-[293px] w-auto"
          />
        </section>
      </main>
    </div>
  )
}

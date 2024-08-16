import { Banknote, CreditCard, Landmark } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type PaymentFormProps = {
  paymentForm: UseFormReturn<{ paymentType: 'credit' | 'debit' | 'cash' }>
}

export function PaymentForm({ paymentForm }: PaymentFormProps) {
  return (
    <Form {...paymentForm}>
      <form className="w-full space-y-6">
        <FormField
          control={paymentForm.control}
          name="paymentType"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center justify-between"
                >
                  <FormItem className="flex h-12 w-44 items-center space-y-0 rounded-md bg-base-button p-4 text-xs has-[:checked]:border has-[:checked]:border-purple-default has-[:checked]:bg-purple-light">
                    <FormControl>
                      <RadioGroupItem value="credit" className="hidden" />
                    </FormControl>
                    <FormLabel className="ml-0 flex cursor-pointer items-center gap-3 text-xs font-normal leading-[1.6]">
                      <CreditCard size={16} className="stroke-purple-default" />
                      CARTÃO DE CRÉDITO
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex h-12 w-44 items-center space-y-0 rounded-md bg-base-button p-4 text-xs has-[:checked]:border has-[:checked]:border-purple-default has-[:checked]:bg-purple-light">
                    <FormControl>
                      <RadioGroupItem value="debit" className="hidden" />
                    </FormControl>
                    <FormLabel className="flex cursor-pointer items-center gap-3 text-xs font-normal leading-[1.6]">
                      <Landmark size={16} className="stroke-purple-default" />
                      CARTÃO DE DÉBITO
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex h-12 w-44 items-center space-y-0 rounded-md bg-base-button p-4 text-xs has-[:checked]:border has-[:checked]:border-purple-default has-[:checked]:bg-purple-light">
                    <FormControl>
                      <RadioGroupItem value="cash" className="hidden" />
                    </FormControl>
                    <FormLabel className="flex cursor-pointer items-center gap-3 text-xs font-normal leading-[1.6]">
                      <Banknote size={16} className="stroke-purple-default" />
                      DINHEIRO
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import { Banknote, CreditCard, Landmark } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const FormSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
})

export function PaymentForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="type"
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
                      <RadioGroupItem value="credito" className="hidden" />
                    </FormControl>
                    <FormLabel className="ml-0 flex cursor-pointer items-center gap-3 text-xs font-normal leading-[1.6]">
                      <CreditCard size={16} className="stroke-purple-default" />
                      CARTÃO DE CRÉDITO
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex h-12 w-44 items-center space-y-0 rounded-md bg-base-button p-4 text-xs has-[:checked]:border has-[:checked]:border-purple-default has-[:checked]:bg-purple-light">
                    <FormControl>
                      <RadioGroupItem value="debito" className="hidden" />
                    </FormControl>
                    <FormLabel className="flex cursor-pointer items-center gap-3 text-xs font-normal leading-[1.6]">
                      <Landmark size={16} className="stroke-purple-default" />
                      CARTÃO DE DÉBITO
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex h-12 w-44 items-center space-y-0 rounded-md bg-base-button p-4 text-xs has-[:checked]:border has-[:checked]:border-purple-default has-[:checked]:bg-purple-light">
                    <FormControl>
                      <RadioGroupItem value="dinheiro" className="hidden" />
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
        {/* NOTE remover botão */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

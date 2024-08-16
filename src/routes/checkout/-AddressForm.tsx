import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { addressSchema } from './-AddressType'

type FormDataType = z.infer<typeof addressSchema>

type AddressFormProps = {
  addressForm: UseFormReturn<FormDataType>
}

export function AddressForm({ addressForm }: AddressFormProps) {
  return (
    <Form {...addressForm}>
      <form className="flex flex-wrap gap-x-3 gap-y-4">
        <FormField
          control={addressForm.control}
          name="cep"
          render={({ field }) => (
            <FormItem className="w-[200px]">
              <FormControl>
                <Input placeholder="CEP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name="rua"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Rua" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name="numero"
          render={({ field }) => (
            <FormItem className="w-[200px]">
              <FormControl>
                <Input placeholder="Número" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name="complemento"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input placeholder="Complemento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name="bairro"
          render={({ field }) => (
            <FormItem className="w-[200px]">
              <FormControl>
                <Input placeholder="Bairro" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name="cidade"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input placeholder="Cidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name="uf"
          render={({ field }) => (
            <FormItem className="w-[60px] shrink">
              <FormControl>
                <Input placeholder="UF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

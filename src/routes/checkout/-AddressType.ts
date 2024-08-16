import { z } from 'zod'

export const addressSchema = z.object({
  cep: z
    .string()
    .length(8, 'CEP deve ter 8 dígitos')
    .regex(/^\d+$/, 'CEP deve conter apenas números')
    .transform((val) => val.replace(/^(\d{5})(\d{3})$/, '$1-$2')),
  rua: z.string().min(3, 'Rua deve conter pelo menos 3 letras'),
  numero: z.string().min(1, 'Número deve conter pelo menos 1 digito'),
  complemento: z.string().optional(),
  bairro: z.string().min(3, 'Bairro deve conter pelo menos 3 letras'),
  cidade: z.string().min(3, 'Cidade deve conter pelo menos 3 letras'),
  uf: z.string().min(2, 'UF deve conter pelo menos 2 letras'),
})

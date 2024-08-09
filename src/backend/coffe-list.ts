import americano from '../assets/card-images/americano.png'
import arabe from '../assets/card-images/arabe.png'
import cafeComLeite from '../assets/card-images/cafe-com-leite.png'
import cafeGelado from '../assets/card-images/cafe-gelado.png'
import capuccino from '../assets/card-images/capuccino.png'
import chocolateQuente from '../assets/card-images/chocolate-quente.png'
import cubano from '../assets/card-images/cubano.png'
import expresso from '../assets/card-images/expresso.png'
import expressoCremoso from '../assets/card-images/expresso-cremoso.png'
import havaiano from '../assets/card-images/havaiano.png'
import irlandes from '../assets/card-images/irlandes.png'
import latte from '../assets/card-images/latte.png'
import macchiato from '../assets/card-images/macchiato.png'
import mochaccino from '../assets/card-images/mochaccino.png'

export const coffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['TRADICIONAL'],
    price: 9.9,
    imageUrl: expresso,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['TRADICIONAL'],
    price: 9.9,
    imageUrl: americano,
    quantity: 0,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['TRADICIONAL'],
    price: 9.9,
    imageUrl: expressoCremoso,
    quantity: 0,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['TRADICIONAL', 'GELADO'],
    price: 9.9,
    imageUrl: cafeGelado,
    quantity: 0,
  },
  {
    id: 5,
    name: 'Cafe com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageUrl: cafeComLeite,
    quantity: 0,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageUrl: latte,
    quantity: 0,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageUrl: capuccino,
    quantity: 0,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageUrl: macchiato,
    quantity: 0,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageUrl: mochaccino,
    quantity: 0,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['ESPECIAL', 'COM LEITE'],
    price: 9.9,
    imageUrl: chocolateQuente,
    quantity: 0,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 9.9,
    imageUrl: cubano,
    quantity: 0,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['ESPECIAL'],
    price: 9.9,
    imageUrl: havaiano,
    quantity: 0,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['ESPECIAL'],
    price: 9.9,
    imageUrl: arabe,
    quantity: 0,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['ESPECIAL', 'ALCOÓLICO'],
    price: 9.9,
    imageUrl: irlandes,
    quantity: 0,
  },
]

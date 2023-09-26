import { createEvent } from 'effector'
import { createStore } from 'effector'

import { BasketItem }  from '@/widgets/header/types'

export const addDiscToBasket = createEvent<BasketItem>()
export const clearBasket = createEvent()

export const $basket = createStore<BasketItem[]>([])

export const $totalAmount = createStore<number>(0)

$basket.on(addDiscToBasket, (s, disc) => [...s, disc]).reset(clearBasket)

$totalAmount
  .on(addDiscToBasket, (state, disc) => {
    return state + disc.cost * disc.amount
  })
  .reset(clearBasket)

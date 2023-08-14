import { createEvent, createStore } from 'effector'

import { BasketItem } from '@/widgets/header/types'

export const addDiscToBasket = createEvent<BasketItem>()

export const $basket = createStore<BasketItem[]>([])

export const $totalAmount = createStore<number>(0)

$basket.on(addDiscToBasket, (s, disc) => [...s, disc])

$totalAmount.on(addDiscToBasket, (state, disc) => {
  return state + disc.cost * disc.amount
})

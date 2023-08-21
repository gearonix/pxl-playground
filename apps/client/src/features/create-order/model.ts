import { createEffect, createEvent, sample } from 'effector'
import { CreateOrderPayload } from 'server-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { $basket, clearBasket } from '@/widgets/header/model/$basket'
import { BasketItem } from '@/widgets/header/types'

export const createOrder = createEvent()

export const createOrderFx = createEffect(async (basket: BasketItem[]) => {
  return httpService
    .url(EndPoints.ORDERS.createOrder)
    .post({ discs: basket } satisfies CreateOrderPayload)
    .json()
})

sample({
  clock: createOrder,
  source: $basket,
  target: createOrderFx
})

sample({
  clock: createOrderFx.doneData,
  target: clearBasket
})

import { createEffect }       from 'effector'
import { createEvent }        from 'effector'
import { sample }             from 'effector'
import { Notify }             from 'quasar'
import { CreateOrderPayload } from 'server-types'

import { EndPoints }          from '@/shared/config/endpoints'
import { httpService }        from '@/shared/config/http-service'
import { FetchError }         from '@/shared/types/http'
import { $basket }            from '@/widgets/header/model/$basket'
import { clearBasket }        from '@/widgets/header/model/$basket'
import { BasketItem }         from '@/widgets/header/types'

export const createOrder = createEvent()

export const createOrderFx = createEffect<BasketItem[], void, FetchError>(
  async (basket: BasketItem[]) => {
    return httpService
      .url(EndPoints.ORDERS.createOrder)
      .post({ discs: basket } satisfies CreateOrderPayload)
      .json()
  }
)

sample({
  clock: createOrder,
  source: $basket,
  target: createOrderFx
})

sample({
  clock: createOrderFx.doneData,
  fn: () => {
    Notify.create('Заказ успешно создан.')
  },
  target: clearBasket
})

sample({
  clock: createOrderFx.failData,
  fn: (err: FetchError) => {
    Notify.create({
      message: err.json?.message,
      color: 'red'
    })
  },
  target: clearBasket
})

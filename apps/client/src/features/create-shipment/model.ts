import { createEffect }        from 'effector'
import { createEvent }         from 'effector'
import { createStore }         from 'effector'
import { sample }              from 'effector'
import { Notify }              from 'quasar'
import { CreateShipmentEntry } from 'server-types'

import { createOrderFx }       from '@/features/create-order/model'
import { EndPoints }           from '@/shared/config/endpoints'
import { httpService }         from '@/shared/config/http-service'
import { clearBasket }         from '@/widgets/header/model/$basket'

export const $creationDate = createStore<string>('')

export const createShipment = createEvent()

export const createShipmentFx = createEffect(async (endDate: string) => {
  return httpService
    .url(EndPoints.ADMIN.createShipment)
    .post({ endDate } satisfies CreateShipmentEntry)
    .json()
})

sample({
  clock: createShipment,
  source: $creationDate,
  target: createShipmentFx
})

sample({
  clock: createShipmentFx.doneData,
  fn: () => {
    Notify.create('Отгрузка успешно создана.')
  }
})

sample({
  clock: createShipmentFx.failData,
  fn: () => {
    Notify.create({
      message: 'Произошла ошибка, возможно где-то есть активная отгрузка',
      type: 'error'
    })
  }
})

import { createEffect, createStore, sample } from 'effector'
import { Shipment } from 'server/src/_prisma-types'
import { ChangeOrderStatus } from 'server-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { FetchError } from '@/shared/types/http'

export const $adminOrders = createStore<Shipment[]>([])

export const getAdminOrdersFx = createEffect<void, Shipment[], FetchError>(
  async () => {
    return httpService.url(EndPoints.ADMIN.getOrders).get().json()
  }
)

export const changeOrderStatusFx = createEffect<
  ChangeOrderStatus,
  void,
  FetchError
>(async (payload) => {
  return httpService.url(EndPoints.ADMIN.changeOrderStatus).put(payload).json()
})





sample({
  clock: getAdminOrdersFx.doneData,
  target: $adminOrders
})

sample({
  clock: changeOrderStatusFx.doneData,
  target: getAdminOrdersFx
})

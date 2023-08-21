import { createEffect, createStore } from 'effector'
import { UserOrder } from 'server/src/_prisma-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { FetchError } from '@/shared/types/http'

export const $userOrders = createStore<UserOrder[]>([])

export const getUserOrdersFx = createEffect<void, UserOrder[], FetchError>(
  async () => {
    return httpService.url(EndPoints.ORDERS.getOrders).get().json<UserOrder[]>()
  }
)

$userOrders.on(getUserOrdersFx.doneData, (_, val) => val)

import { createEvent, createStore, sample } from 'effector'
import { createEffect } from 'effector/compat'
import { DeliveryAddressPayload } from 'server-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { FetchError } from '@/shared/types/http'

export const changeDeliveryAddressFx = createEffect<string, void, FetchError>(
  async (deliveryAddress) => {
    await httpService
      .url(EndPoints.USER.deliveryAddress)
      .put({
        deliveryAddress
      })
      .json<DeliveryAddressPayload>()
  }
)

export const getDeliveryAddressFx = createEffect<void, string, FetchError>(
  async () => {
    const resourse = await httpService
      .url(EndPoints.USER.deliveryAddress)
      .get()
      .json<DeliveryAddressPayload>()

    return resourse.deliveryAddress
  }
)

export const $deliveryAddress = createStore<string>('')
export const setDeliveryAddress = createEvent<string>()

$deliveryAddress.on(setDeliveryAddress, (_, val) => val)

sample({
  clock: changeDeliveryAddressFx.doneData,
  target: getDeliveryAddressFx
})

sample({
  clock: getDeliveryAddressFx.doneData,
  target: setDeliveryAddress
})

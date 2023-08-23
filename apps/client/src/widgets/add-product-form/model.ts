import { createEffect, sample } from 'effector'
import { CreateProduct } from 'server-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { FetchError } from '@/shared/types/http'
import {
  showErrorNotification,
  showSuccessNotification
} from '@/widgets/add-product-form/lib'

export const addProductFx = createEffect<CreateProduct, void, FetchError>(
  async (payload) => {
    console.log(payload)
    return httpService.url(EndPoints.ADMIN.createProduct).post(payload).json()
  }
)

sample({
  clock: addProductFx.doneData,
  fn: () => {
    showSuccessNotification()
  }
})

sample({
  clock: addProductFx.failData,
  fn: () => {
    showErrorNotification()
  }
})

import { createEffect, sample } from 'effector'
import { CreateProduct } from 'server-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { FetchError } from '@/shared/types/http'
import {
  showErrorNotification,
  showSuccessNotification
} from '@/widgets/add-product-form/lib'

export const addProductsFx = createEffect<CreateProduct[], void, FetchError>(
  async (payload) => {
    return httpService.url(EndPoints.ADMIN.createProduct).post(payload).json()
  }
)

sample({
  clock: addProductsFx.doneData,
  fn: () => {
    showSuccessNotification()
  }
})

sample({
  clock: addProductsFx.failData,
  fn: () => {
    showErrorNotification()
  }
})

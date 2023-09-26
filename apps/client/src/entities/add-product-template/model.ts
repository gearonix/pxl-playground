import { createEvent }   from 'effector'
import { createStore }   from 'effector'
import { CreateProduct } from 'server-types'

export const resetForm = createEvent()

export const $addProductForm = createStore<CreateProduct>({
  name: '',
  cost: 0,
  cusa: '',
  type: ''
})

$addProductForm.reset(resetForm)

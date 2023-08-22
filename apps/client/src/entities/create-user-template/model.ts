import { createEvent, createStore } from 'effector'
import { CreateUserEntry } from 'server-types'

export const resetForm = createEvent()

export const $createUserForm = createStore<CreateUserEntry>({
  phoneNumber: '',
  username: ''
})

$createUserForm.reset(resetForm)

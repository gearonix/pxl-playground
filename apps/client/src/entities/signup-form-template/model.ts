import { createEvent, createStore } from 'effector'

import { SignupFormValues } from '@/widgets/signup-form'

export const resetForm = createEvent()

export const $signupForm = createStore<SignupFormValues>({
  phone: '',
  password: ''
})

$signupForm.reset(resetForm)

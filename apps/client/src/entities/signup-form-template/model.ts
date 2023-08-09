import { createStore } from 'effector'
import { SignupFormValues } from '@/widgets/signup-form'

export const $signupForm = createStore<SignupFormValues>({
  phone: '',
  password: ''
})

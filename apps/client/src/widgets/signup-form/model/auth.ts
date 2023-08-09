import { createEvent, createStore } from 'effector'
import { User } from 'server/src/_prisma-types'
import { AuthStore } from '@/widgets/signup-form/types'

export const userChanged = createEvent<User>()
export const clearUser = createEvent()
export const signupFailed = createEvent()

export const $auth = createStore<AuthStore>({
  isAuthorized: false,
  phoneNumber: null,
  userId: null
})

$auth
  .on(userChanged, (_, payload) => ({
    ...payload,
    isAuthorized: true
  }))
  .reset(clearUser)

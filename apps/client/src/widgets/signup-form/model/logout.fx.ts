import { createEffect, sample } from 'effector'
import { LocalStorageClient } from '@/shared/lib/local-storage.ts'
import { $auth, clearUser } from './auth.ts'

const storage = new LocalStorageClient()

export const logoutFx = createEffect(() => {
  storage.clear('AUTH_TOKEN')
})

sample({
  clock: logoutFx.doneData,
  source: $auth,
  target: clearUser
})

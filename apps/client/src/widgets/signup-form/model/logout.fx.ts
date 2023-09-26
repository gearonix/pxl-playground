import { createEffect }       from 'effector'
import { sample }             from 'effector'

import { LocalStorageClient } from '@/shared/lib/local-storage.ts'

import { $auth }              from './auth.ts'
import { clearUser }          from './auth.ts'

const storage = new LocalStorageClient()

export const logoutFx = createEffect(() => {
  storage.clear('AUTH_TOKEN')
})

sample({
  clock: logoutFx.doneData,
  source: $auth,
  target: clearUser
})

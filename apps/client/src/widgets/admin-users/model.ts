import { createEffect } from 'effector'
import { createEvent }  from 'effector'
import { createStore }  from 'effector'
import { User }         from 'server/src/_prisma-types'

import { EndPoints }    from '@/shared/config/endpoints'
import { httpService }  from '@/shared/config/http-service'
import { FetchError }   from '@/shared/types/http'

export const $users = createStore<User[]>([])

export const userCreated = createEvent<User>()

export const getAllUsersFx = createEffect<void, User[], FetchError>(
  async () => {
    return httpService.url(EndPoints.ADMIN.users).get().json()
  }
)

$users
  .on(getAllUsersFx.doneData, (_, val) => val)
  .on(userCreated, (s, user) => [...s, user])

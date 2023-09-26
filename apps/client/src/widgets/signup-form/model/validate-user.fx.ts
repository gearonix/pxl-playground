import { createEffect } from 'effector'
import { sample }       from 'effector'
import { User }         from 'server/src/_prisma-types'

import { EndPoints }    from '@/shared/config/endpoints.ts'
import { httpService }  from '@/shared/config/http-service.ts'
import { FetchError }   from '@/shared/types/http.ts'

import { $auth }        from './auth.ts'
import { userChanged }  from './auth.ts'

export const validateUserFx = createEffect<void, User, FetchError>(async () => {
  return httpService.url(EndPoints.AUTH.validate).get().json<User>()
})

sample({
  clock: validateUserFx.doneData,
  source: $auth,
  fn: (_, payload) => payload,
  target: userChanged
})

import { createEffect, createEvent, createStore, sample } from 'effector'
import { User } from 'server/src/_prisma-types'
import { CreateUserEntry } from 'server-types'

import { resetForm } from '@/entities/create-user-template/model'
import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { removeCharacters } from '@/shared/lib/common'
import { FetchError } from '@/shared/types/http'
import { userCreated } from '@/widgets/admin-users/model'

export interface CreateUserResponse extends User {
  decryptedPassword: string
}

export const $errorMsg = createStore<string>('')

export const setErrorMsg = createEvent<string>()

$errorMsg.on(setErrorMsg, (_, s) => s).reset(resetForm)

export const createUserFx = createEffect<CreateUserEntry, User, FetchError>(
  async (payload) => {
    const resource = await httpService
      .url(EndPoints.ADMIN.createUser)
      .post({
        ...payload,
        phoneNumber: removeCharacters(payload.phoneNumber)
      })
      .json<CreateUserResponse>()

    return resource
  }
)

sample({
  clock: createUserFx.doneData,
  target: [userCreated, resetForm]
})

sample({
  clock: createUserFx.failData,
  fn: (error: FetchError) => {
    return error.json?.message
  },
  target: setErrorMsg
})

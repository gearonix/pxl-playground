import { createEffect }   from 'effector'
import { sample }         from 'effector'
import { User }           from 'server/src/_prisma-types'
import { SetUserBalance } from 'server-types'
import { WithUserId }     from 'server-types'

import { EndPoints }      from '@/shared/config/endpoints'
import { httpService }    from '@/shared/config/http-service'
import { FetchError }     from '@/shared/types/http'
import { getAllUsersFx }  from '@/widgets/admin-users/model'

export const changeUserBalanceFx = createEffect<
  SetUserBalance,
  number,
  FetchError
>(async (payload) => {
  const resource = await httpService
    .url(EndPoints.ADMIN.changeBalance)
    .put(payload)
    .json<User>()

  return resource.balance
})

export const blockUserFx = createEffect<WithUserId, User, FetchError>(async (
  payload
) => {
  return httpService.url(EndPoints.ADMIN.blockUser).put(payload).json<User>()
})

export const deleteUserFx = createEffect<WithUserId, User, FetchError>(async (
  payload
) => {
  return httpService
    .url(EndPoints.ADMIN.deleteUser)
    .json(payload)
    .delete()
    .json<User>()
})

sample({
  clock: [blockUserFx.doneData, deleteUserFx.doneData],
  target: getAllUsersFx
})

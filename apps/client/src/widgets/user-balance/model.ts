import { createEffect }  from 'effector'
import { createStore }   from 'effector'
import { sample }        from 'effector'
import { BalanceChange } from 'server/src/_prisma-types'

import { EndPoints }     from '@/shared/config/endpoints'
import { httpService }   from '@/shared/config/http-service'
import { FetchError }    from '@/shared/types/http'

export const $balanceHistory = createStore<BalanceChange[]>([])

export const getUserBalanceHistoryFx = createEffect<
  void,
  BalanceChange[],
  FetchError
>(async () => {
  return httpService.url(EndPoints.USER.balanceHistory).get().json()
})

sample({
  clock: getUserBalanceHistoryFx.doneData,
  target: $balanceHistory
})

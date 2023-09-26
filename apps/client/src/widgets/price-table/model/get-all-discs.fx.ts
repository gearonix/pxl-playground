import { createEffect }       from 'effector'
import { sample }             from 'effector'
import { Disc }               from 'server/src/_prisma-types'

import { EndPoints }          from '@/shared/config/endpoints'
import { httpService }        from '@/shared/config/http-service'
import { setDiscs }           from '@/widgets/price-table/model/$discs'
import { GetAllDiscsPayload } from '@/widgets/price-table/types'

export const getAllDiscsFx = createEffect(async (
  values: GetAllDiscsPayload
) => {
  return httpService.url(EndPoints.DISCS.all).query(values).get().json<Disc[]>()
})

sample({
  clock: getAllDiscsFx.doneData,
  target: setDiscs
})

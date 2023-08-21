import S from 'fluent-json-schema'
import { DeliveryAddressPayload } from 'server-types'

import { createSchema } from '@/common/lib/create-schema'
import { DiscKeys } from '@/core/discs/types'

export const changeDeliveryAddressSchema = {
  body: S.object().prop(
    'deliveryAddress' satisfies keyof DeliveryAddressPayload,
    S.string().required()
  )
}

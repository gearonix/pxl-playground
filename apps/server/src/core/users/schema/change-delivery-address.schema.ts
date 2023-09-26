import S                          from 'fluent-json-schema'
import { DeliveryAddressPayload } from 'server-types'

export const changeDeliveryAddressSchema = {
  body: S.object().prop(
    'deliveryAddress' satisfies keyof DeliveryAddressPayload,
    S.string().required()
  )
}

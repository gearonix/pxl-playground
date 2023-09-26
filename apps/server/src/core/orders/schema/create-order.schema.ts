import S                   from 'fluent-json-schema'
import { CreateOrderKeys } from 'server-types'

export const createOrderSchema = {
  body: S.object().prop(
    'discs' satisfies CreateOrderKeys,
    S.array()
      .items(
        S.object()
          .prop('id', S.number().required())
          .prop('cost', S.number().required())
          .prop('amount', S.number().required())
      )
      .required()
  )
}

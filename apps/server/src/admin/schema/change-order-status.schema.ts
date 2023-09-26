import S                     from 'fluent-json-schema'
import { ChangeOrderStatus } from 'server-types'
import { WithUserId }        from 'server-types'

export const changeOrderStatusSchema = {
  body: S.object()
    .prop('orderId' satisfies keyof ChangeOrderStatus, S.number().required())
    .prop('status' satisfies keyof ChangeOrderStatus, S.string().required())
}

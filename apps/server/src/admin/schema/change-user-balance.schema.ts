import S from 'fluent-json-schema'
import { SetUserBalance, WithUserId } from 'server-types'

export const changeUserBalanceSchema = {
  body: S.object()
    .prop('userId' satisfies keyof SetUserBalance, S.number().required())
    .prop('balance' satisfies keyof SetUserBalance, S.number().required())
}

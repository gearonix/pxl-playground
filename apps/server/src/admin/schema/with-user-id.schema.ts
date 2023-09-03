import S from 'fluent-json-schema'
import { WithUserId } from 'server-types'

export const withUserIdSchema = {
  body: S.object().prop(
    'userId' satisfies keyof WithUserId,
    S.number().required()
  )
}

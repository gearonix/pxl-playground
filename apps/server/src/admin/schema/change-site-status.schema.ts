import S from 'fluent-json-schema'
import { ChangeSiteStatus, WithUserId } from 'server-types'

export const changeSiteStatusSchema = {
  body: S.object().prop(
    'siteStatus' satisfies keyof ChangeSiteStatus,
    S.string().required()
  )
}

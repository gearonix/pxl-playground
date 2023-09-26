import S                from 'fluent-json-schema'

import { createSchema } from '@/common/lib/create-schema'
import { DiscKeys }     from '@/core/discs/types'

export const getAllDiscsSchema = {
  querystring: S.object().prop('type' satisfies DiscKeys, S.string().required())
}

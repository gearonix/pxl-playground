import S from 'fluent-json-schema'
import { AnyObject } from '@/common/types/common'

export const createSchema = (schema: AnyObject) => ({
  body: S.object(),
  querystring: S.object(),
  params: S.object(),
  headers: S.object(),
  ...schema
})

import S from 'fluent-json-schema'
import { ChangeSiteStatus, CreateProduct, WithUserId } from 'server-types'

export const createProductSchema = {
  body: S.object()
    .prop('name' satisfies keyof CreateProduct, S.string().required())
    .prop('type' satisfies keyof CreateProduct, S.string().required())
    .prop('cusa' satisfies keyof CreateProduct, S.string())
    .prop('cost' satisfies keyof CreateProduct, S.number().required())
}

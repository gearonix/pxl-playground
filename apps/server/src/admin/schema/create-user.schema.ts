import S from 'fluent-json-schema'
import { CreateUserEntry } from 'server-types'

export const createUserSchema = {
  body: S.object()
    .prop('phoneNumber' satisfies keyof CreateUserEntry, S.string().required())
    .prop('username' satisfies keyof CreateUserEntry, S.string().required())
}

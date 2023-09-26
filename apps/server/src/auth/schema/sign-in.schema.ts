import S                from 'fluent-json-schema'
import { SignInEntry }  from 'server-types'

import { createSchema } from '@/common/lib/create-schema'

type SignInKeys = keyof SignInEntry

export const signInSchema = createSchema({
  body: S.object()
    .prop('phone' satisfies SignInKeys, S.string().required().maxLength(14))
    .prop(
      'password' satisfies SignInKeys,
      S.string().minLength(6).required().maxLength(150)
    )
})

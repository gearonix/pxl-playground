import S from 'fluent-json-schema'
import { SignInEntry } from '@/auth/lib/types/entries'

type SignInKeys = keyof SignInEntry

export const signInSchema = {
  body: S.object()
    .prop('phone' satisfies SignInKeys, S.string().required().maxLength(14))
    .prop(
      'password' satisfies SignInKeys,
      S.string().minLength(6).required().maxLength(150)
    ),
  queryString: S.object(),
  params: S.object(),
  headers: S.object()
}

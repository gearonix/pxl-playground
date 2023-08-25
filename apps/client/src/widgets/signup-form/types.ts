import { Nullable } from '@/shared/types/common'

export interface SignupFormValues {
  phone: string
  password: string
}

export interface AuthStore {
  isAuthorized: boolean
  userId: Nullable<number>
  phoneNumber: Nullable<string>
  isAdmin: boolean
  username: Nullable<string>
  balance: Nullable<number>
}

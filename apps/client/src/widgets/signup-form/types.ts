import {Nullable} from '@/shared/types/common.ts'

export interface SignupFormValues {
  phone: string
  password: string
}

export interface AuthStore {
  isAuthorized: boolean
  userId: Nullable<number>
  phoneNumber: Nullable<string>
}

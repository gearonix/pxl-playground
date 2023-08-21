export interface WithUserId {
  userId: number
}

export interface SetUserBalance extends WithUserId {
  balance: number
}

export interface CreateUserEntry {
  phoneNumber: string
  username: string
}

export interface CreateUserWithPassword extends CreateUserEntry {
  password: string
}

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
  decryptedPassword: string
  password: string
}

export interface ChangeSiteStatus {
  siteStatus: string
}

export interface CreateProduct {
  name: string
  type: string
  cusa?: string
  cost: number
}

export interface GetSiteStatus {
  siteStatus: string
}

export interface CreateShipmentEntry {
  endDate: string
}

export interface ChangeOrderStatus {
  orderId: number
  status: string
}

// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

export interface User {
  userId: number
  phoneNumber: string
  password: string
  deliveryAddress: string
}

export interface Disc {
  type: string
  cusa: string
  id: number
  name: string
  cost: number
  createdAt: Date
}

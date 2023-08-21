export interface DeliveryAddressPayload {
  deliveryAddress: string
}

export interface OrderDiscPayload {
  id: number
  amount: number
  cost: number
}

export interface CreateOrderPayload {
  discs: OrderDiscPayload[]
}

export type CreateOrderKeys = keyof CreateOrderPayload

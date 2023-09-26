import { OrderDiscPayload } from 'server-types'

import { UserOrder }        from '@/_prisma-types'

export const getTotalAmount = (orders: OrderDiscPayload[]): number => {
  return orders.reduce((a, b) => a + b.cost * b.amount, 0)
}

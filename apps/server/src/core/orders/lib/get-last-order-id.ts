import { UserOrder } from '@/_prisma-types'

export const getLastOrderId = (order: UserOrder) => {
  return order?.orderId ? order.orderId + 1 : 1
}

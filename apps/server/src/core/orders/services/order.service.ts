import { CreateOrderPayload } from 'server-types'

import { UserOrder } from '@/_prisma-types'
import { Service } from '@/common/lib/service.module'
import { getLastOrderId, getTotalAmount } from '@/core/orders/lib'

export class OrderService extends Service {
  async createOrder(
    order: CreateOrderPayload,
    userId: number
  ): Promise<UserOrder> {
    const lastOrder = await this.server.prisma.userOrder.findFirst({
      where: {
        createdBy: userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const orderId = getLastOrderId(lastOrder)
    const totalAmount = getTotalAmount(order.discs)

    return this.server.prisma.userOrder.create({
      data: {
        discs: order.discs,
        status: '_TEST_',
        createdBy: userId,
        orderId,
        totalAmount
      }
    })
  }

  async getUserOrders(userId: number): Promise<UserOrder[]> {
    return this.server.prisma.userOrder.findMany({
      where: {
        createdBy: userId
      }
    })
  }
}

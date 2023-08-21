import { CreateOrderPayload } from 'server-types'

import { useAuthGuard } from '@/common/guards/use-auth-guard'
import { withEntry, withUserId } from '@/common/modifiers'
import { Body, Controller } from '@/common/types/fastify'
import { createOrderSchema } from '@/core/orders/schema'
import { OrderService } from '@/core/orders/services/order.service'

import { OrdersRoutes } from './consts/routes'

export const ordersController: Controller = (server, opts, done) => {
  const orderService = new OrderService(server)

  useAuthGuard(server)

  server.post<Body<CreateOrderPayload>>(
    OrdersRoutes.CREATE_ORDER,
    { schema: createOrderSchema },
    async (req) => {
      const entry = withEntry(req)
      const userId = withUserId(req)

      return orderService.createOrder(entry, userId)
    }
  )

  server.get(OrdersRoutes.GET_ORDERS, async (req) => {
    const userId = withUserId(req)

    return orderService.getUserOrders(userId)
  })

  done()
}

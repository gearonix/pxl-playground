import { CreateOrderPayload } from 'server-types'

import { useAuthGuard }       from '@/common/guards/use-auth-guard'
import { withEntry }          from '@/common/modifiers'
import { withUserId }         from '@/common/modifiers'
import { Body }               from '@/common/types/fastify'
import { Controller }         from '@/common/types/fastify'
import { createOrderSchema }  from '@/core/orders/schema'
import { OrderService }       from '@/core/orders/services/order.service'

import { OrdersRoutes }       from './consts/routes'

export const ordersController: Controller = (server, opts, done) => {
  const orderService = new OrderService(server)

  useAuthGuard(server)

  server.post<Body<CreateOrderPayload>>(
    OrdersRoutes.CREATE_ORDER,
    {
      schema: createOrderSchema,
      onRequest: [orderService.checkShipmentActivity.bind(orderService)]
    },
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

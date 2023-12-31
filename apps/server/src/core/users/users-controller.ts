import { CreateOrderPayload }     from 'server-types'
import { DeliveryAddressPayload } from 'server-types'

import { BalanceChange }          from '@/_prisma-types'
import { useAuthGuard }           from '@/common/guards/use-auth-guard'
import { withEntry }              from '@/common/modifiers'
import { withUserId }             from '@/common/modifiers'
import { Body }                   from '@/common/types/fastify'
import { Controller }             from '@/common/types/fastify'
import { createOrderSchema }      from '@/core/users/schema'
import { OrderService }           from '@/core/users/services/order.service'
import { UserControlService }     from '@/core/users/services/user-control.service'
import { UsersService }           from '@/core/users/services/users.service'

import { UsersRoutes }            from './consts/routes'

export const usersController: Controller = (server, opts, done) => {
  const usersService = new UsersService(server)
  const userControlService = new UserControlService(server)

  useAuthGuard(server)

  server.get(UsersRoutes.DELIVERY_ADDRESS, async (
    req
  ): Promise<DeliveryAddressPayload> => {
    const userId = withUserId(req)

    return userControlService.getDeliveryAddress(userId)
  })

  server.put<Body<DeliveryAddressPayload>>(UsersRoutes.DELIVERY_ADDRESS, async (
    req
  ): Promise<DeliveryAddressPayload> => {
    const entry = withEntry(req)
    const userId = withUserId(req)

    return userControlService.changeDeliveryAddress(
      userId,
      entry.deliveryAddress
    )
  })

  server.get(UsersRoutes.BALANCE_HISTORY, async (
    req
  ): Promise<BalanceChange[]> => {
    const userId = withUserId(req)

    return userControlService.getBalanceHistory(userId)
  })

  done()
}

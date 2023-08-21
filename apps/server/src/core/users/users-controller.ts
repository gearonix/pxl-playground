import { DeliveryAddressPayload } from 'server-types'

import { AuthService } from '@/auth/auth-service'
import { useAuthGuard } from '@/common/guards/use-auth-guard'
import { Body, Controller } from '@/common/types/fastify'
import { changeDeliveryAddressSchema } from '@/core/users/schema'
import { UserControlService } from '@/core/users/services/user-controll.service'
import { UsersService } from '@/core/users/services/users-service'

import { UsersRoutes } from './consts/routes'

export const usersController: Controller = (server, opts, done) => {
  const users = new UsersService(server)
  const userControl = new UserControlService(server)

  useAuthGuard(server)

  server.get(
    UsersRoutes.DELIVERY_ADDRESS,
    async (req): Promise<DeliveryAddressPayload> => {
      return userControl.getDeliveryAddress(req.user.userId)
    }
  )

  server.put<Body<DeliveryAddressPayload>>(
    UsersRoutes.DELIVERY_ADDRESS,
    async (req): Promise<DeliveryAddressPayload> => {
      const entry = req.body
      return userControl.changeDeliveryAddress(
        req.user.userId,
        entry.deliveryAddress
      )
    }
  )

  done()
}

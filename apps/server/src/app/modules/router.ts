import { FastifyPluginAsync } from 'fastify'

import { adminController }    from '@/admin'
import { authController }     from '@/auth'
import { RoutePaths }         from '@/common/consts/paths'
import { discsController }    from '@/core/discs/discs-controller'
import { ordersController }   from '@/core/orders'
import { usersController }    from '@/core/users/users-controller'

export const routerModule: FastifyPluginAsync = async (server) => {
  server.register(authController, { prefix: RoutePaths.AUTH })
  server.register(discsController, { prefix: RoutePaths.DISCS })
  server.register(usersController, { prefix: RoutePaths.USERS })
  server.register(ordersController, { prefix: RoutePaths.ORDERS })
  server.register(adminController, { prefix: RoutePaths.ADMIN })
}

import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { authController } from '@/auth'
import { RoutePaths } from '@/common/consts/paths'
import { discsController } from '@/core/discs/discs-controller'

export const routerModule: FastifyPluginAsync = fp(async (server) => {
  server.register(authController, { prefix: RoutePaths.AUTH })
  server.register(discsController, { prefix: RoutePaths.DISCS })
})

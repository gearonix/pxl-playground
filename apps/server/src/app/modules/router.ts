import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { authController } from '@/auth'
import { RoutePaths } from '@/common/consts/paths'

export const routerModule: FastifyPluginAsync = fp(async (server) => {
  server.register(authController, { prefix: RoutePaths.AUTH })
})

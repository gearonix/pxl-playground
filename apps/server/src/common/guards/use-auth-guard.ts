import { FastifyInstance } from 'fastify'

import { AuthService }     from '@/auth/auth-service'

export const useAuthGuard = (server: FastifyInstance) => {
  const authService = new AuthService(server)

  server.addHook('onRequest', async (...args) => {
    server.authGuard(...args)
    await authService.prepareUser.call(authService, ...args)
  })
}

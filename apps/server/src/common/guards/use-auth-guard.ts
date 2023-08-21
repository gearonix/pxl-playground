import { FastifyInstance } from 'fastify'

import { AuthService } from '@/auth/auth-service'

export const useAuthGuard = (server: FastifyInstance) => {
  const authService = new AuthService(server)

  server.addHook('preHandler', server.authGuard)
  server.addHook('preHandler', authService.prepareUser.bind(authService))
}

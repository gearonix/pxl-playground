import jwtService from '@fastify/jwt'
import { onRequestHookHandler } from 'fastify'
import bcrypt from 'fastify-bcrypt'
import fp from 'fastify-plugin'
import { jwtSecret } from '@/common/consts/env'

declare module 'fastify' {
  interface FastifyInstance {
    authGuard: onRequestHookHandler<any>
  }
}

export const jwtAuthModule = fp(async (server) => {
  server.register(jwtService, {
    secret: jwtSecret
  })

  server.register(bcrypt)

  server.decorate('authGuard', async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (error) {
      reply.send(error)
    }
  })
})

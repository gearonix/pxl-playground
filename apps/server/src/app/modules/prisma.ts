import { PrismaClient }       from '@prisma/client'
import { FastifyPluginAsync } from 'fastify'
import fp                     from 'fastify-plugin'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

export const prismaModule: FastifyPluginAsync = fp(async (server) => {
  const prisma = new PrismaClient()

  await prisma.$connect()

  server.decorate('prisma', prisma)

  server.addHook('onClose', async (server) => {
    await server.prisma.$disconnect()
  })
})

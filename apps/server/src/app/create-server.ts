import caching from '@fastify/caching'
import cors from '@fastify/cors'
import securityHeaders from '@fastify/helmet'
import swagger from '@fastify/swagger'
import { fastify, FastifyInstance, FastifyServerOptions } from 'fastify'
import { prismaPlugin, statusPlugin } from './plugins'
import { corsOptions } from './config/cors'
import { swaggerOptions } from './config/swagger'

export const createServer = (options: FastifyServerOptions): FastifyInstance => {
  const server = fastify(options)

  server.register(cors, corsOptions)

  server.register(securityHeaders)

  server.register(caching, { privacy: caching.privacy.NOCACHE })

  server.register(prismaPlugin)

  server.register(statusPlugin)

  server.register(swagger, swaggerOptions)

  console.log(process.env.DATABASE_URL)

  return server
}

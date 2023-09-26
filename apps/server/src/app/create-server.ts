import caching                  from '@fastify/caching'
import cors                     from '@fastify/cors'
import securityHeaders          from '@fastify/helmet'
import swagger                  from '@fastify/swagger'
import { fastify }              from 'fastify'
import { FastifyInstance }      from 'fastify'
import { FastifyServerOptions } from 'fastify'

import { exceptionModule }      from '@/app/modules/exception-module'
import { jwtAuthModule }        from '@/app/modules/jwt-auth'
import { serverPrefix }         from '@/common/consts/env'

import { corsOptions }          from './config/cors'
import { swaggerOptions }       from './config/swagger'
import { healthCheckModule }    from './modules'
import { prismaModule }         from './modules'
import { routerModule }         from './modules'

export const createServer = (
  options: FastifyServerOptions
): FastifyInstance => {
  const server = fastify(options)

  server.register(cors, corsOptions)

  server.register(jwtAuthModule)

  server.register(securityHeaders)

  server.register(caching, { privacy: caching.privacy.NOCACHE })

  server.register(prismaModule)

  server.register(exceptionModule)

  server.register(healthCheckModule, { prefix: serverPrefix })

  server.register(routerModule, { prefix: serverPrefix })

  server.register(swagger, swaggerOptions)

  return server
}

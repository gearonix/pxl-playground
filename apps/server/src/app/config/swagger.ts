import { SwaggerOptions } from '@fastify/swagger'
import { appName } from 'config/consts'

import { serverHost } from '@/common/consts/env'

export const swaggerOptions: SwaggerOptions = {
  swagger: {
    info: {
      title: appName,
      description: `${appName} API`,
      version: '0.1.0'
    },
    host: serverHost,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}

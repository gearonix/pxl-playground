import { SwaggerOptions } from '@fastify/swagger'

import { serverHost }     from '@/common/consts/env'

export const swaggerOptions: SwaggerOptions = {
  swagger: {
    info: {
      title: 'Pixel Playground',
      description: 'Pixel Playground API',
      version: '0.1.0'
    },
    host: serverHost,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}

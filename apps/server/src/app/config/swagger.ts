import { SwaggerOptions } from '@fastify/swagger'

export const swaggerOptions: SwaggerOptions = {
  swagger: {
    info: {
      title: 'Pixel Playground',
      description: 'Pixel Playground API',
      version: '0.1.0'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}

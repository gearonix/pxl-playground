import { FastifyCorsOptions } from '@fastify/cors'

export const corsOptions: FastifyCorsOptions = {
  origin: 'localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}

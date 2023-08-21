import { FastifyRequest } from 'fastify'

export const withEntry = <T extends FastifyRequest>(req: T): T['body'] => {
  return req.body
}

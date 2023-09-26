import { FastifyPluginAsync } from 'fastify'
import { FastifyReply }       from 'fastify'
import fp                     from 'fastify-plugin'

import { HttpStatus }         from '@/common/consts/http-statuses'
import { HttpStatusValues }   from '@/common/consts/http-statuses'

declare module 'fastify' {
  interface FastifyReply {
    throwError: (
      reply: FastifyReply,
      payload: ExceptionModulePayload
    ) => FastifyReply
  }
}

interface ExceptionModulePayload {
  msg: string
  code?: HttpStatusValues
}

export const exceptionModule: FastifyPluginAsync = fp(async (server) => {
  server.decorateReply('throwError', (
    reply: FastifyReply,
    { msg, code = HttpStatus.BAD_REQUEST }
  ) => {
    server.log.error(msg)
    console.warn(msg)

    return reply.status(code).send({
      message: msg,
      statusCode: code,
      error: true
    })
  })
})

import { FastifyPluginAsync, FastifyReply } from 'fastify'
import { HttpStatus, HttpStatusValues } from '@/common/consts/http-statuses'
import fp from 'fastify-plugin'

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
  server.decorateReply(
    'throwError',
    (reply: FastifyReply, { msg, code = HttpStatus.BAD_REQUEST }) => {
      server.log.error(msg)
      return reply.status(code).send({
        message: msg,
        statusCode: code,
        error: true
      })
    }
  )
})

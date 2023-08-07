import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { AnyFunction } from '@/common/types/common'

export const withGuards = (guards: AnyFunction[]): RouteShorthandOptions => {
  return {
    onRequest: [...guards]
  }
}

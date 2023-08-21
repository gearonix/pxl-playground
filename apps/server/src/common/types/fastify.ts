import {FastifyRequest} from 'fastify'
import { DoneFuncWithErrOrRes, FastifyInstance } from 'fastify'
import { AnyObject } from '@/common/types/common'

export interface Body<T> {
  Body: T
}

export interface Query<T> {
  Querystring: T
}

export type Controller = (
  server: FastifyInstance,
  opts: AnyObject,
  done: DoneFuncWithErrOrRes
) => void

export type Modifier<U> = <T extends FastifyRequest>(req: T) => U

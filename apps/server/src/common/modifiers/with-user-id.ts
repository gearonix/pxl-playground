import { FastifyRequest } from 'fastify'

import { User }           from '@/_prisma-types'
import { Modifier }       from '@/common/types/fastify'

export const withUserId: Modifier<number> = (req) => {
  return (req.user as User).userId
}

import {Modifier} from '@/common/types/fastify'
import { FastifyRequest } from 'fastify'

import { User } from '@/_prisma-types'

export const withUserId: Modifier<number> = (req) => {
  return (req.user as User).userId
}

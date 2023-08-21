import { FastifyInstance } from 'fastify'

import { User } from '@/_prisma-types'
import { NotEnoughRightsException } from '@/common/consts/exceptions'
import { HttpStatus } from '@/common/consts/http-statuses'
import { useAuthGuard } from '@/common/guards/use-auth-guard'

export const useAdminGuard = async (server: FastifyInstance) => {
  useAuthGuard(server)

  server.addHook('onRequest', (req, reply, done) => {
    if ((req.user as User).isAdmin !== true) {
      return reply.throwError(reply, {
        msg: NotEnoughRightsException,
        code: HttpStatus.BAD_REQUEST
      })
    }

    done()
  })
}

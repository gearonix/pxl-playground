import { AccessTokenPayload }  from 'server-types'
import { AccessTokenResponse } from 'server-types'
import { SignInEntry }         from 'server-types'

import { User }                from '@/_prisma-types'
import { AuthService }         from '@/auth/auth-service'
import { withGuards }          from '@/common/lib/with-guards'
import { Body }                from '@/common/types/fastify'
import { Controller }          from '@/common/types/fastify'

import { AuthRoutes }          from './lib/types/routes'
import { signInSchema }        from './schema/sign-in.schema'

export const authController: Controller = (server, opt, done) => {
  const authService = new AuthService(server)

  server.post<Body<SignInEntry>>(
    AuthRoutes.LOGIN,
    {
      schema: signInSchema,
      preHandler: [authService.validate.bind(authService)]
    },
    async (req): Promise<AccessTokenResponse> => {
      return authService.generateToken((req.user as AccessTokenPayload).userId)
    }
  )

  server.get<Body<void>>(
    AuthRoutes.VALIDATE_TOKEN,
    withGuards([server.authGuard, authService.prepareUser.bind(authService)]),
    async (req): Promise<Omit<User, 'password'>> => {
      return req.user
    }
  )

  done()
}

import { DoneFuncWithErrOrRes, FastifyInstance } from 'fastify'
import { User } from '@/_prisma-types'
import { AuthService } from '@/auth/auth-service'
import {
  AccessTokenPayload,
  AccessTokenResponse
} from '@/auth/lib/types/responses'
import { withGuards } from '@/common/lib/with-guards'
import { Body } from '@/common/types/fastify'
import { SignInEntry } from './lib/types/entries'
import { AuthRoutes } from './lib/types/routes'
import { signInSchema } from './schema/sign-in.schema'
import {AnyObject} from '@/common/types/common'

export const authController = (
  server: FastifyInstance,
  opts: AnyObject,
  done: DoneFuncWithErrOrRes
) => {
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

  server.post<Body<SignInEntry>>(
    AuthRoutes.CREATE_USER,
    { schema: signInSchema },
    async (req, reply): Promise<AccessTokenResponse> => {
      const newUser = await authService.registerUser(req.body, reply)

      return authService.generateToken(newUser.userId)
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

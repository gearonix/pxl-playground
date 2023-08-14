import {
  AccessTokenPayload,
  AccessTokenResponse,
  SignInEntry
} from 'server-types'
import { User } from '@/_prisma-types'
import { AuthService } from '@/auth/auth-service'
import { withGuards } from '@/common/lib/with-guards'
import { Body, Controller } from '@/common/types/fastify'
import { AuthRoutes } from './lib/types/routes'
import { signInSchema } from './schema/sign-in.schema'

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

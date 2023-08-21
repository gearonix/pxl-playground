import {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from 'fastify'
import { AccessTokenResponse, SignInEntry } from 'server-types'

import { User } from '@/_prisma-types'
import {
  UserAlreadyExists,
  UserNotFound,
  WrongPassword
} from '@/auth/lib/consts/exceptions'
import { HttpStatus } from '@/common/consts/http-statuses'
import { Body } from '@/common/types/fastify'
import { UsersService } from '@/core/users'

import { AccessTokenPayload } from './types'

export class AuthService {
  usersService: UsersService
  server: FastifyInstance

  constructor(server: FastifyInstance) {
    this.server = server
    this.usersService = new UsersService(server)
  }

  public async validate(
    req: FastifyRequest<Body<SignInEntry>>,
    reply: FastifyReply,
    done: DoneFuncWithErrOrRes
  ) {
    const entry = req.body

    const user = await this.usersService.findUserByPhoneNumber(entry.phone)

    if (!user) {
      return reply.throwError(reply, {
        msg: UserNotFound,
        code: HttpStatus.NOT_FOUND
      })
    }

    const isPasswordEquals = await this.server.bcrypt.compare(
      entry.password,
      user.password
    )

    if (!isPasswordEquals) {
      return reply.throwError(reply, { msg: WrongPassword })
    }

    req.user = user

    done()
  }

  public async prepareUser(
    req: FastifyRequest<Body<void>>,
    reply: FastifyReply,
    done: DoneFuncWithErrOrRes
  ) {
    const userId = (req.user as AccessTokenPayload).userId

    const user = await this.usersService.findUserById(userId)

    if (!user) {
      return reply.throwError(reply, {
        msg: UserNotFound,
        code: HttpStatus.NOT_FOUND
      })
    }

    req.user = user
  }

  public async registerUser(
    entry: SignInEntry,
    reply: FastifyReply
  ): Promise<User> {
    const possibleUser = await this.usersService.findUserByPhoneNumber(
      entry.phone
    )

    if (possibleUser) {
      return reply.throwError(reply, { msg: UserAlreadyExists })
    }

    const hashPassword = await this.server.bcrypt.hash(entry.password)

    return this.usersService.createUser({
      phoneNumber: entry.phone,
      password: hashPassword
    })
  }

  public generateToken(userId: number): AccessTokenResponse {
    const accessToken = this.server.jwt.sign({
      userId: String(userId),
      _JWT: true
    })

    return {
      accessToken
    }
  }
}

import { DoneFuncWithErrOrRes } from 'fastify'
import { FastifyInstance }      from 'fastify'
import { FastifyReply }         from 'fastify'
import { FastifyRequest }       from 'fastify'
import { AccessTokenResponse }  from 'server-types'
import { SignInEntry }          from 'server-types'

import { AdminGlobalService }   from '@/admin/services/admin-global.service'
import { UserIsBlocked }        from '@/auth/lib/consts/exceptions'
import { UserNotFound }         from '@/auth/lib/consts/exceptions'
import { WrongPassword }        from '@/auth/lib/consts/exceptions'
import { HttpStatus }           from '@/common/consts/http-statuses'
import { Body }                 from '@/common/types/fastify'
import { UsersService }         from '@/core/users'

import { AccessTokenPayload }   from './types'

export class AuthService {
  usersService: UsersService
  globalService: AdminGlobalService
  server: FastifyInstance

  constructor(server: FastifyInstance) {
    this.server = server
    this.usersService = new UsersService(server)
    this.globalService = new AdminGlobalService(server)
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

    if (user.isBlocked) {
      return reply.throwError(reply, { msg: UserIsBlocked })
    }

    if (!user.isAdmin) {
      await this.globalService.checkGlobalSettings(reply)
    }

    req.user = user

    done()
  }

  public async prepareUser(
    req: FastifyRequest<Body<void>>,
    reply: FastifyReply
  ) {
    const userId = (req.user as AccessTokenPayload).userId

    const user = await this.usersService.findUserById(userId)

    if (!user) {
      return reply.throwError(reply, {
        msg: UserNotFound,
        code: HttpStatus.NOT_FOUND
      })
    }

    if (!user.isAdmin) {
      await this.globalService.checkGlobalSettings(reply)
    }

    req.user = user
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

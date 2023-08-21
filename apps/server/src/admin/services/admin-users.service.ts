import { FastifyReply } from 'fastify'
import {CreateUserWithPassword} from 'server-types'
import { CreateUserEntry, SignInEntry } from 'server-types'

import { User } from '@/_prisma-types'
import { UserAlreadyExists } from '@/auth/lib/consts/exceptions'
import { generateUuid } from '@/common/lib/generate-uuid'
import { UsersService } from '@/core/users'

export class AdminUsersService extends UsersService {
  async getUsers() {
    return this.server.prisma.user.findMany({
      include: {
        orders: true
      }
    })
  }

  async blockUser(userId: number) {
    return this.server.prisma.user.update({
      where: {
        userId
      },
      data: {
        isBlocked: true
      }
    })
  }

  async changeUserBalance(userId: number, balance: number) {
    return this.server.prisma.user.update({
      where: {
        userId
      },
      data: {
        balance
      }
    })
  }

  public async registerUser(
    entry: CreateUserEntry,
    reply: FastifyReply
  ): Promise<User> {
    const possibleUser = await this.findUserByPhoneNumber(entry.phoneNumber)

    if (possibleUser) {
      return reply.throwError(reply, { msg: UserAlreadyExists })
    }

    const newPassword = generateUuid()

    const hashPassword = await this.server.bcrypt.hash(newPassword)

    return this.createUser({
      phoneNumber: entry.phoneNumber,
      password: hashPassword,
      username: entry.username
    })
  }

  async createUser(user: CreateUserWithPassword): Promise<User> {
    return this.server.prisma.user.create({
      data: user
    })
  }
}

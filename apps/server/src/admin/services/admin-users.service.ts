import { FastifyReply } from 'fastify'
import {
  CreateUserEntry,
  CreateUserReply,
  CreateUserWithPassword
} from 'server-types'

import { User } from '@/_prisma-types'
import { UserAlreadyExists } from '@/auth/lib/consts/exceptions'
import { generateUuid } from '@/common/lib/generate-uuid'
import { UsersService } from '@/core/users'

export class AdminUsersService extends UsersService {
  async getUsers() {
    return this.server.prisma.user.findMany({
      include: {
        orders: true
      },
      where: {
        isAdmin: false
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

  public async registerUser(entry: CreateUserEntry, reply: FastifyReply) {
    const possibleUser = await this.findUserByPhoneNumber(entry.phoneNumber)

    if (possibleUser) {
      return reply.throwError(reply, { msg: UserAlreadyExists })
    }

    const userPassword = generateUuid()

    const hashPassword = await this.server.bcrypt.hash(userPassword)

    return this.createUser({
      phoneNumber: entry.phoneNumber,
      decryptedPassword: userPassword,
      password: hashPassword,
      username: entry.username
    })
  }

  async createUser({
    decryptedPassword,
    ...user
  }: CreateUserWithPassword): Promise<User & { decryptedPassword: string }> {
    const newUser = await this.server.prisma.user.create({
      data: user,
      include: {
        orders: true
      }
    })
    return {
      ...newUser,
      decryptedPassword
    }
  }
}

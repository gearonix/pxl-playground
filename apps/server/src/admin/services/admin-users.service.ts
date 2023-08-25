import { FastifyReply } from 'fastify'
import { CreateUserEntry, CreateUserWithPassword } from 'server-types'

import { BalanceStatus, User } from '@/_prisma-types'
import { getUserBalanceChange } from '@/admin/lib/get-user-balance-change'
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

  async changeUserBalance(userId: number, balance: number): Promise<User> {
    const user = await this.findUserById(userId)

    const updatedUser = await this.server.prisma.user.update({
      where: {
        userId
      },
      data: {
        balance
      }
    })

    const [balanceStatus, difference] = getUserBalanceChange(
      user.balance,
      updatedUser.balance
    )

    await this.server.prisma.balanceChange.create({
      data: {
        userId,
        type: balanceStatus,
        difference
      }
    })

    return updatedUser
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

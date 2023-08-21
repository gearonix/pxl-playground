import { User } from '@/_prisma-types'
import { Service } from '@/common/lib/service.module'
import { ExtractOptional } from '@/common/types/common'

export class UsersService extends Service {
  async findUserByPhoneNumber(phoneNumber: string): Promise<User> {
    return this.server.prisma.user.findFirst({
      where: {
        phoneNumber
      }
    })
  }

  async findUserById(userId: number): Promise<Omit<User, 'password'>> {
    return this.server.prisma.user.findFirst({
      where: {
        userId: Number(userId)
      },
      select: {
        password: false,
        userId: true,
        phoneNumber: true,
        isAdmin: true
      }
    })
  }
}

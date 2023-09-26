import { User }            from '@/_prisma-types'
import { Service }         from '@/common/lib/service.module'
import { ExtractOptional } from '@/common/types/common'

export class UserControlService extends Service {
  async changeDeliveryAddress(userId: number, deliveryAddress: string) {
    return this.server.prisma.user.update({
      where: {
        userId
      },
      data: {
        deliveryAddress
      }
    })
  }

  async getDeliveryAddress(
    userId: number
  ): Promise<Pick<User, 'deliveryAddress'>> {
    return this.server.prisma.user.findFirst({
      where: {
        userId
      },
      select: {
        deliveryAddress: true
      }
    })
  }

  async getBalanceHistory(userId: number) {
    return this.server.prisma.balanceChange.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}

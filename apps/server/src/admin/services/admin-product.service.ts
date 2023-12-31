import { ChangeOrderStatus } from 'server-types'
import { CreateProduct }     from 'server-types'

import { Disc }              from '@/_prisma-types'
import { Service }           from '@/common/lib/service.module'

export class AdminProductService extends Service {
  async createProducts(entry: CreateProduct[]): Promise<Disc> {
    return this.server.prisma.disc.createMany({
      data: entry
    })
  }

  async changeOrderStatus(payload: ChangeOrderStatus) {
    return this.server.prisma.userOrder.update({
      where: {
        id: payload.orderId
      },
      data: {
        status: payload.status
      }
    })
  }

  async deleteProducts() {
    return this.server.prisma.disc.deleteMany()
  }
}

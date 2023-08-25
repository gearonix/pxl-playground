import { ChangeOrderStatus, CreateProduct } from 'server-types'

import { Disc } from '@/_prisma-types'
import { Service } from '@/common/lib/service.module'

export class AdminProductService extends Service {
  async createProduct(entry: CreateProduct): Promise<Disc> {
    return this.server.prisma.disc.create({
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
}

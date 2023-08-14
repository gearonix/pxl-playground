import { FastifyInstance } from 'fastify'
import { Service } from '@/common/lib/service-module'
import { DiscType } from '@/core/discs/types'

export class DiscsService extends Service {
  getDiscs({ type }: { type: DiscType }) {
    return this.server.prisma.disc.findMany({
      where: {
        type
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}

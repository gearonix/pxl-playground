import { FastifyInstance } from 'fastify'
import { Service } from '@/common/lib/service-module'
import { DiscType } from '@/core/discs/types'

export class DiscsService extends Service {
  disc: unknown
  constructor(server: FastifyInstance) {
    super(server)
    this.disc = this.server.prisma.disc
  }

  getDiscs({ type }: { type: DiscType }) {
    return this.disc.findMany({
      where: {
        type
      }
    })
  }
}

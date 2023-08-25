import { FastifyReply } from 'fastify'
import { CreateShipmentEntry } from 'server-types'

import { ActiveShipmentExists } from '@/admin/consts/exceptions'
import { HttpStatus } from '@/common/consts/http-statuses'
import { Service } from '@/common/lib/service.module'

export class AdminShipmentService extends Service {
  async getCurrentShipment() {
    return this.server.prisma.shipment.findFirst({
      where: {
        startDate: {
          lte: new Date()
        },
        endDate: {
          gte: new Date()
        }
      }
    })
  }

  async createShipment(payload: CreateShipmentEntry, reply: FastifyReply) {
    const currentShipment = await this.getCurrentShipment()

    if (currentShipment) {
      return reply.throwError(reply, {
        msg: ActiveShipmentExists,
        code: HttpStatus.BAD_REQUEST
      })
    }

    return this.server.prisma.shipment.create({
      data: {
        endDate: new Date(payload.endDate)
      }
    })
  }

  async getShipments() {
    return this.server.prisma.shipment.findMany({
      include: {
        orders: {
          include: {
            user: true
          }
        }
      }
    })
  }
}

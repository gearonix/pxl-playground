import {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from 'fastify'
import { CreateOrderPayload, SignInEntry } from 'server-types'

import { UserOrder } from '@/_prisma-types'
import { AdminShipmentService } from '@/admin/services/admin-shipment.service'
import { UserNotFound } from '@/auth/lib/consts/exceptions'
import { HttpStatus } from '@/common/consts/http-statuses'
import { Service } from '@/common/lib/service.module'
import { Body } from '@/common/types/fastify'
import { NoActiveShipmentException } from '@/core/orders/consts/exceptions'
import { getLastOrderId, getTotalAmount } from '@/core/orders/lib'

export class OrderService extends Service {
  adminService: AdminShipmentService

  constructor(server: FastifyInstance) {
    super(server)
    this.adminService = new AdminShipmentService(server)
  }

  async checkShipmentActivity(
    req: FastifyRequest,
    reply: FastifyReply,
    done: DoneFuncWithErrOrRes
  ) {
    const shipment = await this.adminService.getCurrentShipment()

    if (!shipment) {
      reply.throwError(reply, {
        msg: NoActiveShipmentException,
        code: HttpStatus.BAD_REQUEST
      })
    }
  }

  async createOrder(
    order: CreateOrderPayload,
    userId: number
  ): Promise<UserOrder> {
    const lastOrder = await this.server.prisma.userOrder.findFirst({
      where: {
        createdBy: userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const orderId = getLastOrderId(lastOrder)
    const totalAmount = getTotalAmount(order.discs)

    const currentShipment = await this.server.prisma.shipment.findFirst({
      where: {
        startDate: {
          lte: new Date()
        },
        endDate: {
          gte: new Date()
        }
      }
    })

    return this.server.prisma.userOrder.create({
      data: {
        discs: order.discs,
        status: '_TEST_',
        orderId,
        totalAmount,
        user: {
          connect: {
            userId
          }
        },
        shipment: {
          connect: {
            id: currentShipment.id
          }
        }
      }
    })
  }

  async getUserOrders(userId: number): Promise<UserOrder[]> {
    return this.server.prisma.userOrder.findMany({
      where: {
        createdBy: userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}

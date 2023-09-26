import { ChangeOrderStatus }       from 'server-types'
import { ChangeSiteStatus }        from 'server-types'
import { CreateProduct }           from 'server-types'
import { CreateShipmentEntry }     from 'server-types'
import { CreateUserEntry }         from 'server-types'
import { SetUserBalance }          from 'server-types'
import { WithUserId }              from 'server-types'

import { Disc }                    from '@/_prisma-types'
import { Shipment }                from '@/_prisma-types'
import { SiteStatus }              from '@/_prisma-types'
import { User }                    from '@/_prisma-types'
import { AdminRoutes }             from '@/admin/consts/routes'
import { changeOrderStatusSchema } from '@/admin/schema'
import { changeSiteStatusSchema }  from '@/admin/schema'
import { changeUserBalanceSchema } from '@/admin/schema'
import { createProductSchema }     from '@/admin/schema'
import { createShipmentSchema }    from '@/admin/schema'
import { createUserSchema }        from '@/admin/schema'
import { withUserIdSchema }        from '@/admin/schema'
import { AdminGlobalService }      from '@/admin/services/admin-global.service'
import { AdminProductService }     from '@/admin/services/admin-product.service'
import { AdminShipmentService }    from '@/admin/services/admin-shipment.service'
import { AdminUsersService }       from '@/admin/services/admin-users.service'
import { useAdminGuard }           from '@/common/guards'
import { withEntry }               from '@/common/modifiers'
import { Body }                    from '@/common/types/fastify'
import { Controller }              from '@/common/types/fastify'

export const adminController: Controller = (server, opts, done) => {
  const usersService = new AdminUsersService(server)
  const productService = new AdminProductService(server)
  const globalService = new AdminGlobalService(server)
  const shipmentService = new AdminShipmentService(server)

  useAdminGuard(server)

  server.get(AdminRoutes.USERS, async (): Promise<User[]> => {
    return usersService.getUsers()
  })

  server.put<Body<WithUserId>>(
    AdminRoutes.BLOCK_USER,
    { schema: withUserIdSchema },
    async (req): Promise<User> => {
      const entry = withEntry(req)

      return usersService.toggleUserBlock(entry.userId)
    }
  )

  server.delete<Body<WithUserId>>(
    AdminRoutes.DELETE_USER,
    { schema: withUserIdSchema },
    async (req): Promise<User> => {
      const entry = withEntry(req)

      return usersService.deleteUser(entry.userId)
    }
  )

  server.put<Body<SetUserBalance>>(
    AdminRoutes.CHANGE_USER_BALANCE,
    { schema: changeUserBalanceSchema },
    async (req): Promise<User> => {
      const entry = withEntry(req)

      return usersService.changeUserBalance(entry.userId, entry.balance)
    }
  )

  server.post<Body<CreateUserEntry>>(
    AdminRoutes.CREATE_USER,
    { schema: createUserSchema },
    async (req, reply) => {
      const entry = withEntry(req)

      return usersService.registerUser(entry, reply)
    }
  )

  server.post<Body<ChangeSiteStatus>>(
    AdminRoutes.SITE_STATUS,
    { schema: changeSiteStatusSchema },
    async (req) => {
      const entry = withEntry(req)

      return globalService.changeSiteStatus(entry.siteStatus as SiteStatus)
    }
  )

  server.get(AdminRoutes.SITE_STATUS, async () => {
    return globalService.getSiteStatus()
  })

  server.post<Body<CreateProduct[]>>(
    AdminRoutes.CREATE_PRODUCT,
    { schema: createProductSchema },
    async (req) => {
      const entry = withEntry(req)

      return productService.createProducts(entry)
    }
  )

  server.post<Body<CreateShipmentEntry>>(
    AdminRoutes.CREATE_SHIPMENT,
    { schema: createShipmentSchema },
    async (req, reply): Promise<Shipment> => {
      const entry = withEntry(req)

      return shipmentService.createShipment(entry, reply)
    }
  )

  server.get(AdminRoutes.SHIPMENTS, async (): Promise<Shipment[]> => {
    return shipmentService.getShipments()
  })

  server.put<Body<ChangeOrderStatus>>(
    AdminRoutes.CHANGE_ORDER_STATUS,
    {
      schema: changeOrderStatusSchema
    },
    async (req) => {
      const entry = withEntry(req)

      return productService.changeOrderStatus(entry)
    }
  )

  server.delete<Body<Disc[]>>(AdminRoutes.DELETE_PRODUCTS, async () => {
    return productService.deleteProducts()
  })

  done()
}

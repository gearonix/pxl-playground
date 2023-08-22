import {
  ChangeSiteStatus,
  CreateProduct,
  CreateUserEntry,
  SetUserBalance,
  WithUserId
} from 'server-types'

import { User } from '@/_prisma-types'
import { AdminRoutes } from '@/admin/consts/routes'
import {
  blockUserSchema,
  changeSiteStatusSchema,
  changeUserBalanceSchema,
  createProductSchema,
  createUserSchema
} from '@/admin/schema'
import { AdminGlobalService } from '@/admin/services/admin-global.service'
import { AdminProductService } from '@/admin/services/admin-product.service'
import { AdminUsersService } from '@/admin/services/admin-users.service'
import { useAdminGuard } from '@/common/guards'
import { withEntry } from '@/common/modifiers'
import { Body, Controller } from '@/common/types/fastify'

export const adminController: Controller = (server, opts, done) => {
  const usersService = new AdminUsersService(server)
  const productService = new AdminProductService(server)
  const globalService = new AdminGlobalService(server)

  useAdminGuard(server)

  server.get(AdminRoutes.USERS, async (): Promise<User[]> => {
    return usersService.getUsers()
  })

  server.put<Body<WithUserId>>(
    AdminRoutes.BLOCK_USER,
    { schema: blockUserSchema },
    async (req): Promise<User> => {
      const entry = withEntry(req)

      return usersService.blockUser(entry.userId)
    }
  )

  server.put<Body<SetUserBalance>>(
    AdminRoutes.CHANGE_USER_BALANCE,
    { schema: changeUserBalanceSchema },
    async (req) => {
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
    AdminRoutes.CHANGE_SITE_STATUS,
    { schema: changeSiteStatusSchema },
    async (req) => {
      const entry = withEntry(req)

      return globalService.toggleSiteStatus(entry.siteStatus)
    }
  )

  server.post<Body<CreateProduct>>(
    AdminRoutes.CREATE_PRODUCT,
    { schema: createProductSchema },
    async (req) => {
      const entry = withEntry(req)

      return productService.createProduct(entry)
    }
  )

  done()
}

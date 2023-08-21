import { AccessTokenResponse, DiscType, GetAllDiscsEntry } from 'server-types'

import { useAuthGuard } from '@/common/guards/use-auth-guard'
import { Controller, Query } from '@/common/types/fastify'
import { DiscsRoutes } from '@/core/discs/consts/routes'
import { DiscsService } from '@/core/discs/discs-service'
import { getAllDiscsSchema } from '@/core/discs/schema'

export const discsController: Controller = (server, opts, done) => {
  const discsService = new DiscsService(server)

  useAuthGuard(server)

  server.get<Query<GetAllDiscsEntry<DiscType>>>(
    DiscsRoutes.GET_ALL,
    { schema: getAllDiscsSchema, onRequest: server.authGuard },
    async (req): Promise<AccessTokenResponse> => {
      return discsService.getDiscs(req.query)
    }
  )

  done()
}

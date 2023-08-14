import { AccessTokenResponse, GetAllDiscsEntry } from 'server-types'
import { Controller, Query } from '@/common/types/fastify'
import { DiscsRoutes } from '@/core/discs/consts/routes'
import { DiscsService } from '@/core/discs/discs-service'
import { getAllDiscsSchema } from '@/core/discs/schema'
import { DiscType } from '@/core/discs/types'

export const discsController: Controller = (server, opts, done) => {
  const discsService = new DiscsService(server)

  server.get<Query<GetAllDiscsEntry<DiscType>>>(
    DiscsRoutes.GET_ALL,
    { schema: getAllDiscsSchema },
    async (req): Promise<AccessTokenResponse> => {
      return discsService.getDiscs(req.query)
    }
  )

  done()
}

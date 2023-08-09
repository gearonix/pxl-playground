import { FastifyPluginAsync } from 'fastify'
import { RoutePaths } from '@/common/consts/paths'
import { appName } from 'config/consts'

interface StatusCheckResponse {
  message: string
}

export const healthCheckModule: FastifyPluginAsync = async (server) => {
  server.get(RoutePaths._ROOT, async (): Promise<StatusCheckResponse> => {
    return {
      message: `${appName} API`
    }
  })
}

import { FastifyPluginAsync } from 'fastify'

import { RoutePaths }         from '@/common/consts/paths'

interface StatusCheckResponse {
  message: string
}

export const healthCheckModule: FastifyPluginAsync = async (server) => {
  server.get(RoutePaths._ROOT, async (): Promise<StatusCheckResponse> => {
    return {
      message: 'pixel-playground API'
    }
  })
}

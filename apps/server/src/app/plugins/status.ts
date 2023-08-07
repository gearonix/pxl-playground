import { FastifyPluginAsync } from 'fastify'
import { RoutePaths } from './../../common/paths'

export const statusPlugin: FastifyPluginAsync = async (server) => {
  server.setErrorHandler((error) => {
    server.log.error(error)
  })

  server.get(RoutePaths._ROOT, async (req, res) => {
    return {
      status: 200,
      message: 'ok'
    }
  })
}

import { FastifyCorsOptions } from '@fastify/cors'

import { clientUrl } from '@/common/consts/env'

export const corsOptions: FastifyCorsOptions = {
  origin: clientUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}

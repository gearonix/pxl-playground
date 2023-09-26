import { FastifyReply }          from 'fastify'
import { ChangeSiteStatus }      from 'server-types'
import { GetSiteStatus }         from 'server-types'

import { SiteStatus }            from '@/_prisma-types'
import { ServerIsDownException } from '@/admin/consts/exceptions'
import { UserNotFound }          from '@/auth/lib/consts/exceptions'
import { HttpStatus }            from '@/common/consts/http-statuses'
import { Service }               from '@/common/lib/service.module'

export class AdminGlobalService extends Service {
  async changeSiteStatus(status: SiteStatus): Promise<ChangeSiteStatus> {
    const globalSettings = await this.server.prisma.globalSettings.update({
      data: {
        SITE_STATUS: status
      },
      where: {
        id: 1
      },
      select: {
        SITE_STATUS: true
      }
    })

    return {
      siteStatus: globalSettings.SITE_STATUS
    }
  }

  async getSiteStatus(): Promise<GetSiteStatus> {
    const globalSettings = await this.server.prisma.globalSettings.findFirst({
      select: {
        SITE_STATUS: true
      }
    })

    return {
      siteStatus: globalSettings.SITE_STATUS
    }
  }

  async checkGlobalSettings(reply: FastifyReply) {
    const globalSettings = await this.server.prisma.globalSettings.findFirst()
    if (globalSettings.SITE_STATUS === 'CLOSED') {
      reply.throwError(reply, {
        msg: ServerIsDownException,
        code: HttpStatus.BAD_REQUEST
      })
    }
  }
}

import { createEffect, createStore } from 'effector'
import { SiteStatus } from 'server/src/_prisma-types'
import { ChangeSiteStatus } from 'server-types'

import { EndPoints } from '@/shared/config/endpoints'
import { httpService } from '@/shared/config/http-service'
import { Nullable } from '@/shared/types/common'
import { FetchError } from '@/shared/types/http'

export const $siteStatus = createStore<Nullable<SiteStatus>>(null)

export const getSiteStatusFx = createEffect<void, ChangeSiteStatus, FetchError>(
  async () => {
    return httpService
      .url(EndPoints.ADMIN.siteStatus)
      .get()
      .json<ChangeSiteStatus>()
  }
)

export const changeSiteStatusFx = createEffect<
  boolean,
  ChangeSiteStatus,
  FetchError
>(async (isWorking) => {
  const wantedStatus = isWorking ? SiteStatus.CLOSED : SiteStatus.WORKING

  return httpService
    .url(EndPoints.ADMIN.siteStatus)
    .post({
      siteStatus: wantedStatus
    })
    .json()
})

$siteStatus.on(
  [getSiteStatusFx.doneData, changeSiteStatusFx.doneData],
  (_, s) => s.siteStatus as SiteStatus
)

import wretch, { ConfiguredMiddleware } from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'
import { LocalStorageClient } from '@/shared/lib/local-storage'
import { serverUrl } from './env'

const storage = new LocalStorageClient()

const authMiddleware: ConfiguredMiddleware = (next) => (url, opts) => {
  const authToken = storage.get<string>('AUTH_TOKEN', '')

  return next(url, {
    ...opts,
    headers: {
      ...(opts.headers || {}),
      Authorization: `Bearer ${authToken}`
    }
  })
}

export const httpService = wretch(serverUrl)
  .middlewares([authMiddleware])
  .addon(QueryStringAddon)

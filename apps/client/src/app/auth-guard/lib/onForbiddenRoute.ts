import { allowedPaths } from '../config'

export const onForbiddenRoute = (isAuthorized: boolean, path: string) => ({
  authorized: isAuthorized && allowedPaths.unauthorized.includes(path),
  unauthorized: !isAuthorized && allowedPaths.authorized.includes(path)
})

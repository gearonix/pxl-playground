import { allowedPaths } from '../config'

export const onForbiddenRoute = (isAuthorized: boolean, path: string) => ({
  authorized: isAuthorized && !allowedPaths.authorized.includes(path),
  admin: isAuthorized && !allowedPaths.admin.includes(path),
  unauthorized: !isAuthorized && !allowedPaths.unauthorized.includes(path)
})

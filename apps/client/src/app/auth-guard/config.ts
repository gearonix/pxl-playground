import { RoutePaths } from '@/shared/config/paths'

export const allowedPaths = {
  unauthorized: [RoutePaths.SIGNUP],
  authorized: [RoutePaths.MAIN, RoutePaths.PROFILE],
  admin: [RoutePaths.MAIN, RoutePaths.ADMIN, RoutePaths.PROFILE]
}

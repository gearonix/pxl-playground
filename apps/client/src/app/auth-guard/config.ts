import { RoutePaths } from '@/shared/config/paths.ts'

export const allowedPaths = {
  unauthorized: [RoutePaths.SIGNUP],
  authorized: [RoutePaths.MAIN, RoutePaths.PROFILE]
}

const routes = {
  _ROOT: '_ROOT',
  _DOCS: '_DOCS'
} as const

export const RoutePaths = {
  [routes._ROOT]: '/',
  [routes._DOCS]: '/docs'
} as const

type RouteKeys = keyof typeof RoutePaths

export type RouteUrls = (typeof RoutePaths)[RouteKeys]

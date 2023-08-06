import { Main } from '@/pages/main'
import { Signup } from '@/pages/signup'
import { RoutePaths, RouteUrls } from '@/shared/config/paths'

interface Route {
  path: RouteUrls
  component: any
}

export const routes: Route[] = [
  {
    path: RoutePaths.MAIN,
    component: Main
  },
  {
    path: RoutePaths.SIGNUP,
    component: Signup
  }
]

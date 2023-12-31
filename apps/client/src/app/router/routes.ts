import { AdminPage }  from '@/pages/admin'
import { Main }       from '@/pages/main'
import { Profile }    from '@/pages/profile'
import { Signup }     from '@/pages/signup'
import { RoutePaths } from '@/shared/config/paths'
import { RouteUrls }  from '@/shared/config/paths'

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
  },
  {
    path: RoutePaths.PROFILE,
    component: Profile
  },
  {
    path: RoutePaths.ADMIN,
    component: AdminPage
  }
]

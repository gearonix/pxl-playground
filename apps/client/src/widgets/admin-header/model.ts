import { createEvent } from 'effector'
import { createStore } from 'effector'

export type AdminTabs =
  | 'users'
  | 'site-status'
  | 'add-product'
  | 'shipments'
  | 'orders'

export const setAdminTab = createEvent<AdminTabs>()

export const $adminTab = createStore<AdminTabs>('users')

$adminTab.on(setAdminTab, (_, s) => s)

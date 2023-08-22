import { createEvent, createStore } from 'effector'

export type AdminTabs = 'users'

export const setAdminTab = createEvent<AdminTabs>()

export const $adminTab = createStore<AdminTabs>('users')

$adminTab.on(setAdminTab, (_, s) => s)

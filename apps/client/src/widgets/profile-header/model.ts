import { createEvent, createStore } from 'effector'

export type ProfileTabs = 'data' | 'balance' | 'orders' | 'leave-account'

export const setProfileTab = createEvent<ProfileTabs>()

export const $profileTab = createStore<ProfileTabs>('data')

$profileTab.on(setProfileTab, (_, s) => s)

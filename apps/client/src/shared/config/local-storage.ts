export const LocalStorage = {
  AUTH_TOKEN: 'AUTH_TOKEN'
} as const

export type LocalStorageKeys = keyof typeof LocalStorage

export type LocalStorageValue<T extends LocalStorageKeys> =
  (typeof LocalStorage)[T]

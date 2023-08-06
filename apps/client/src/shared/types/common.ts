export type Url = `/${string}`

export type Keys<T extends Record<string, string>> = keyof T

export type Values<T extends Record<string, string>> = T[Keys<T>]

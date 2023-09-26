export type ExtractOptional<T extends object, key extends keyof T> = Omit<
  T,
  key
> & { key?: T[key] }

export type AnyObject<T = unknown> = Record<string, T>

export type AnyFunction<T = unknown> = (...args: any[]) => T

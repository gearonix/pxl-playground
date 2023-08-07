export const HttpStatus = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const

export type HttpStatusKeys = keyof typeof HttpStatus

export type HttpStatusValues = (typeof HttpStatus)[HttpStatusKeys]

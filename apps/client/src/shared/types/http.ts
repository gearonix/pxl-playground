import { WretchError } from 'wretch'

export type FetchError = Omit<WretchError, 'json'> & {
  json: {
    message: string
    statusCode: number
    error: boolean
  }
}

import { v4 } from 'uuid'

export const generateUuid = () => {
  return v4().slice(0, 8)
}

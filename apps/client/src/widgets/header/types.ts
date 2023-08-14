import { Disc } from 'server/src/_prisma-types'

export interface BasketItem {
  amount: number
  id: Disc['id']
  cost: number
}

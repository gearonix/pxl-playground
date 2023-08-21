import { Disc } from 'server/src/_prisma-types'

export const createRows = (discs: Disc[]) => {
  return discs.map((item) => ({
    ...item,
    amount: 0
  }))
}

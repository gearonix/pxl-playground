import { changeUserBalanceFx } from '@/entities/user-card/model'

export const useChangeBalance = (userId: number) => {
  return changeUserBalanceFx.prepend((balance: string) => {
    return {
      balance: balance.replace?.(' ', ''),
      userId
    }
  })
}

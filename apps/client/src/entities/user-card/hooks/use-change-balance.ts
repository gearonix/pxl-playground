import { Ref } from 'vue'

import { changeUserBalanceFx } from '@/entities/user-card/model'

export const useChangeBalance = (userId: number, balance: Ref<number>) => {
  return changeUserBalanceFx.prepend(() => {
    return {
      balance: balance.value,
      userId
    }
  })
}

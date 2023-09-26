import { User }     from 'server/src/_prisma-types'
import { computed } from 'vue'

export const useOrdersCount = (user: User) => {
  return {
    ordersCount: computed(() => {
      return user.orders.length
    }),
    discsCount: computed(() => {
      return user.orders.reduce((a, b) => a + b.discs?.length, 0)
    })
  }
}

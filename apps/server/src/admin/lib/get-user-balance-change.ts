import { BalanceStatus } from '@/_prisma-types'
import { User }          from '@/_prisma-types'

export const getUserBalanceChange = (
  balance: User['balance'],
  updatedBalance: User['balance']
): [BalanceStatus, number] => {
  if (updatedBalance === balance) {
    return [BalanceStatus.NEUTRAL, 0]
  }

  const balanceStatus =
    updatedBalance > balance ? BalanceStatus.POSITIVE : BalanceStatus.NEGATIVE

  const balanceDiff = updatedBalance - balance

  return [balanceStatus, balanceDiff]
}

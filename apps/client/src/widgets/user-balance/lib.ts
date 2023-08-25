import { BalanceStatus } from 'server/src/_prisma-types'

export const balanceChangeLabels: Record<BalanceStatus, string> = {
  [BalanceStatus.POSITIVE]: 'Пополнение',
  [BalanceStatus.NEGATIVE]: 'Списание',
  [BalanceStatus.NEUTRAL]: 'Без изменений'
}

export const balanceChangeColors: Record<BalanceStatus, string> = {
  [BalanceStatus.POSITIVE]: 'bg-green-5',
  [BalanceStatus.NEGATIVE]: 'bg-red-5',
  [BalanceStatus.NEUTRAL]: 'bg-grey-6'
}

export const transformBalanceChangeName = (status: BalanceStatus) => {
  return balanceChangeLabels[status]
}

export const getBalanceChangeColor = (status: BalanceStatus) => {
  return balanceChangeColors[status]
}

export const transformBalanceDifference = (diff: number) => {
  return diff > 0 ? `+ ${diff}` : `- ${String(diff).replace('-', '')}`
}

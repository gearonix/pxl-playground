import { ProfileTabs } from '@/widgets/profile-header/model'

export interface UserTab<T> {
  label: string
  name: T
}

export const createTabs = (): UserTab<ProfileTabs>[] => [
  {
    label: 'Данные',
    name: 'data'
  },
  {
    name: 'orders',
    label: 'Заказы'
  },
  {
    name: 'balance',
    label: 'Баланс'
  }
]

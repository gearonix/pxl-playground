import { AdminTabs } from '@/widgets/admin-header/model'
import { UserTab }   from '@/widgets/profile-header/lib'

export const createAdminTabs = (): UserTab<AdminTabs>[] => [
  {
    name: 'users',
    label: 'Пользователи'
  },
  {
    name: 'add-product',
    label: 'Товары'
  },
  {
    name: 'shipments',
    label: 'Отгрузки'
  },
  {
    name: 'orders',
    label: 'Заказы'
  },
  {
    name: 'site-status',
    label: 'Статус сайта'
  }
]

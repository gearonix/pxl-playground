export const createOrderColumns = () => [
  {
    name: 'createdBy',
    label: 'ID пользователя',
    align: 'left'
  },
  {
    name: 'phone',
    label: 'Телефон',
    align: 'left'
  },
  {
    name: 'orderId',
    label: 'Номер заказа',
    align: 'left'
  },
  { name: 'totalAmount', align: 'left', label: 'Сумма заказа' },
  { name: 'status', label: 'Статус', align: 'left' },
  { name: 'createdAt', label: 'Создан', align: 'left' }
]

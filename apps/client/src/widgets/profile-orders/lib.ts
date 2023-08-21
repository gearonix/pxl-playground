export const createOrderColumns = () => [
  {
    name: 'orderId',
    label: 'Номер заказа',
    align: 'left'
  },
  { name: 'totalAmount', align: 'left', label: 'Сумма заказа' },
  { name: 'status', label: 'Статус', align: 'left' },
  { name: 'createdAt', label: 'Создан', align: 'left' }
]

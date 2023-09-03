import { CreateProduct } from 'server-types'

export const isNewProducts = (orders: unknown): orders is CreateProduct[] => {
  if (!Array.isArray(orders)) {
    return false
  }

  const order = orders[0]

  if (
    order &&
    typeof order === 'object' &&
    'name' in order &&
    typeof order.name === 'string' &&
    'cost' in order &&
    typeof order.cost === 'number' &&
    'type' in order &&
    typeof order.type === 'string' &&
    'type' in order &&
    typeof order.type === 'string'
  ) {
    return true
  }

  return false
}

export const EndPoints = {
  AUTH: {
    login: '/auth/login',
    validate: '/auth/validate'
  },
  DISCS: {
    all: '/discs/all'
  },
  USER: {
    deliveryAddress: '/users/delivery-address'
  },
  ORDERS: {
    createOrder: '/orders/create-order',
    getOrders: '/orders/get-orders'
  }
} as const

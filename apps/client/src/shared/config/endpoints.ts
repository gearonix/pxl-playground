export const EndPoints = {
  AUTH: {
    login: '/auth/login',
    validate: '/auth/validate'
  },
  DISCS: {
    all: '/discs/all'
  },
  USER: {
    deliveryAddress: '/users/delivery-address',
    balanceHistory: '/users/balance-history'
  },
  ORDERS: {
    createOrder: '/orders/create-order',
    getOrders: '/orders/get-orders'
  },
  ADMIN: {
    users: '/admin/users',
    blockUser: '/admin/block-user',
    changeBalance: '/admin/change-balance',
    createUser: '/admin/create-user',
    siteStatus: '/admin/site-status',
    createProduct: '/admin/create-product',
    createShipment: '/admin/create-shipment',
    getOrders: '/admin/shipments',
    changeOrderStatus: '/admin/change-order-status'
  }
} as const

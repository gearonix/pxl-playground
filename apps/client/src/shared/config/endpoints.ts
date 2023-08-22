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
  },
  ADMIN: {
    users: '/admin/users',
    blockUser: '/admin/block-user',
    changeBalance: '/admin/change-balance',
    createUser: '/admin/create-user',
    toggleSiteStatus: '/admin/toggle-site-status',
    createProduct: '/admin/create-product'
  }
} as const

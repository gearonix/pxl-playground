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
  }
} as const

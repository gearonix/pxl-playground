export const defineServerPath = () => {
  return process.env.NODE_ENV === 'production' ? 'passenger' : undefined
}

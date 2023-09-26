export const required = () => (val: string) =>
  (val !== null && val !== '') || 'Это поле обязательно'

export const min = (chars: number) => (val: string) =>
  val?.length >= 6 || `Minimum length is ${chars} characters`

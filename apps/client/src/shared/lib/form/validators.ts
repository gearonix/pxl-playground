export const required = (field: string) => (val: string) =>
  (val !== null && val !== '') || `${field} is required field`

export const min = (chars: number) => (val: string) =>
  val?.length >= 6 || `Minimum length is ${chars} characters`

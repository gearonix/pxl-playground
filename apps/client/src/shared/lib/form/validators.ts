export const required = (field: string) => (val) =>
  (val !== null && val !== '') || `${field} is required field`

export const min = (chars: number) => (val) =>
  val?.length >= 6 || `Minimum length is ${chars} characters`

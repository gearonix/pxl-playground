/**
 * Converts string to phone number
 * @param phone (example: 111111111)
 * @returns string (example: +1 (111) 111 1111
 */

export const convertPhoneNumber = (phone: string) => {
  if (!phone) {
    return
  }

  const firstPart = `+${phone.slice(0, 1)}`
  const secondPart = `(${phone.slice(1, 4)})`
  const thirdPart = phone.slice(4, 7)
  const lastPart = phone.slice(7)

  return [firstPart, secondPart, thirdPart, lastPart].join(' ')
}

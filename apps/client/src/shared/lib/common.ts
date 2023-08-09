export const removeCharacters = (str: string) => {
  return str.replace(/[^0-9.]/g, '')
}

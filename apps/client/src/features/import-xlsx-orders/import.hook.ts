import { importExcelFile } from './xlsx/import'

export const useExcelImport = (callback: (...args: any) => unknown) => {
  return (file: File) => {
    importExcelFile(file, callback)
  }
}

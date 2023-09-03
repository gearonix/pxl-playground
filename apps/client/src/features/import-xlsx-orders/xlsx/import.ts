import { Notify } from 'quasar'
import { isNewProducts } from 'src/features/import-xlsx-orders/xlsx/is-new-products'
import xlsx from 'xlsx/dist/xlsx.full.min'

import { addProductsFx } from '@/widgets/add-product-form/model'

type Xlsx = typeof import('xlsx')

export const importExcelFile = (
  excelFile: File,
  callback: (...args: any) => unknown
) => {
  const xl = xlsx as Xlsx

  if (!excelFile) {
    return
  }

  const reader = new FileReader()

  reader.addEventListener('load', (e) => {
    const fileData = e.target!.result
    const workbook = xl.read(fileData, {
      type: 'binary'
    })

    workbook.SheetNames.forEach(async (sheetName) => {
      const newProducts: unknown = xl.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      )

      if (!isNewProducts(newProducts)) {
        return Notify.create({
          message: 'Некорректный ввод данных.',
          color: 'red'
        })
      }

      callback(newProducts)
    })
  })

  reader.readAsBinaryString(excelFile)
}

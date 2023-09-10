import { Disc, Shipment } from 'server/src/_prisma-types'
import { toRaw } from 'vue'
import xlsx from 'xlsx/dist/xlsx.full.min'

export const exportExcel = (
  shipment: Shipment[],
  callback?: (args: Disc[]) => unknown
) => {
  const orders = toRaw(shipment).flatMap((i) => i.orders)

  const discs: Disc[] = orders.flatMap((order) => order.discs)

  writeToExcelFile('orders', orders)
  writeToExcelFile('discs', discs)

  callback?.()
}

export const writeToExcelFile = (name: string, inputData: any) => {
  type Xlsx = typeof import('xlsx')

  const xl = xlsx as Xlsx

  const workbook = xl.utils.book_new()

  const fileName = `${name}_${Date.now()}.xlsx`

  const workSheet = xl.utils.json_to_sheet(toRaw(inputData))

  xl.utils.book_append_sheet(workbook, workSheet, name)

  xl.writeFile(workbook, fileName)
}

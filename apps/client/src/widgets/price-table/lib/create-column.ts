import { Disc } from 'server/src/_prisma-types'

const createColumn = (key: keyof Disc, label: string) => ({
  name: key,
  label,
  align: 'left'
})

export const createColumns = () => [
  createColumn('name', 'Название'),
  createColumn('cost', 'Цена'),
  createColumn('cusa', 'CUSA'),
  createColumn('amount', 'Количество'),
  createColumn('type', 'Тип диска')
]

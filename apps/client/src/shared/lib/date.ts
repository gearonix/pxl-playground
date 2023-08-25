import dayjs from 'dayjs'

export const transformMysqlDate = (mysqlDate: string) => {
  return dayjs(mysqlDate).format('HH:MM (DD/MM/YYYY)')
}

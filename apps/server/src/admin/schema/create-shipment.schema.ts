import S from 'fluent-json-schema'
import { CreateShipmentEntry } from 'server-types'

export const createShipmentSchema = {
  body: S.object().prop(
    'endDate' satisfies keyof CreateShipmentEntry,
    S.string().required()
  )
}

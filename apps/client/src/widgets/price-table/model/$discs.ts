import { createEvent } from 'effector'
import { createStore } from 'effector'
import { restore }     from 'effector'
import { Disc }        from 'server/src/_prisma-types'
import { DiscType }    from 'server-types'

export const setDiscs = createEvent<Disc[]>()

export const setDiscType = createEvent<DiscType>()

export const $discs = createStore<Disc[]>([])

export const $discType = restore(setDiscType, 'PS4')

$discs.on(setDiscs, (_, payload) => payload)

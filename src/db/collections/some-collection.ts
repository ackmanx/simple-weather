import type { SomeDbEntity } from '$db/entity-types'
import db from '$db/mongo'

export const SomeCollection = db.collection<SomeDbEntity>('some-collection')

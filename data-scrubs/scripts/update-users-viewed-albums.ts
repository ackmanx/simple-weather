#!/usr/bin/env tsx
import { runScript } from '../config'
import { viewedAlbums } from './update-users-viewed-albums__data-file'

await runScript(async (mongo) => {
  const users = mongo.db('ialreadysawthat').collection('users')

  await users.updateOne({ id: 'ackmanx' }, { $set: { viewedAlbums } })
})

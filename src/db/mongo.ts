import { MongoClient } from 'mongodb'

import { MONGODB_URI } from '$env/static/private'

if (!MONGODB_URI) {
  throw new Error(
    'How do you expect me to connect to the database without a MONGODB_URI environment variable?'
  )
}

const client = new MongoClient(MONGODB_URI)

export function start_mongo() {
  console.log('Starting mongo...')
  return client.connect()
}

export default client.db()

import { MongoClient } from 'mongodb'

/*
 * See readme file for troubleshooting
 */
if (!process.env.MONGODB_URI) {
  console.log('MongoDB URI is not set')
  process.exit()
}

const connectionUrl = process.env.MONGODB_URI

type DataScrub = (client: MongoClient) => Promise<void>

export async function runScript(dataScrub: DataScrub) {
  const mongo = new MongoClient(connectionUrl)

  try {
    await mongo.connect()

    console.log('Connected to MongoDB...')

    console.log('Performing edits...')

    await dataScrub(mongo)

    console.log('Finished!')
  } catch (error) {
    console.error(error)
  }

  process.exit()
}

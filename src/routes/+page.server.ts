import { SomeCollection } from '$db/collections/some-collection'

interface ResponseBody {
  collectionDocuments: {
    createdForTesting: string
  }[]
}

export const load = async (): Promise<ResponseBody> => {
  await SomeCollection.insertOne({ createdForTesting: new Date().toISOString() })

  return {
    collectionDocuments: await SomeCollection.find({}, { projection: { _id: 0 } }).toArray(),
  }
}

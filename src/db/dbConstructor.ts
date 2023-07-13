import { RxDatabase, createRxDatabase, addRxPlugin } from 'rxdb'
import { BooksCollection, booksSchema } from './bookSchema'
import { getRxStorageLoki } from 'rxdb/plugins/storage-lokijs'
import LokiIncrementalAdapter from 'lokijs/src/incremental-indexeddb-adapter'
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election'

addRxPlugin(RxDBLeaderElectionPlugin)

export type LocalDbCollections = {
  books: BooksCollection
}

export type LocalDatabase = RxDatabase<LocalDbCollections>
let dbInstance: Promise<LocalDatabase>

const createLocalDatabase = async () => {
  const db: LocalDatabase = await createRxDatabase({
    name: 'libraryDb',
    storage: getRxStorageLoki({
      adapter: new LokiIncrementalAdapter(),
    }),
    multiInstance: true,
    ignoreDuplicate: true,
  })

  await db.waitForLeadership().catch(() => {
    console.log('leadirship error')
  })

  await db.addCollections({
    books: {
      schema: booksSchema,
      autoMigrate: true,
    },
  })

  return db
}

export const getDb = async () => {
  if (!dbInstance) dbInstance = createLocalDatabase()
  return dbInstance
}

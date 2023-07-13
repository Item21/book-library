import { Book } from '@/types/book'
import { capitalize, unCapitalize } from '../utils'
import { getDb } from './dbConstructor'
import { v4 as uuidv4 } from 'uuid'

export const insertBook = async (data: Book) => {
  const db = await getDb()
  return await db.books?.insert({
    id: uuidv4(),
    ...data,
  })
}

export const getBooks = async (name?: string) => {
  const db = await getDb()
  if (name) {
    return db?.books.find({
      selector: {
        $or: [
          {
            name: {
              $regex: `.*${capitalize(name)}.*`,
            },
          },
          {
            name: {
              $regex: `.*${unCapitalize(name)}.*`,
            },
          },
        ],
      },
    })
  }
  return db?.books.find()
}

import { RxJsonSchema, RxCollection } from 'rxdb'
import { Book } from '@/types/book'

export const booksSchema: RxJsonSchema<Book> = {
  title: 'books',
  description: 'books',
  version: 0,
  primaryKey: 'id',
  type: 'book',
  properties: {
    id: {
      type: 'uuid',
      maxLength: 100,
    },
    name: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    description: {
      type: 'string',
      maxLength: 300,
    },
  },
}

export type BooksCollection = RxCollection<Book>

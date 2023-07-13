import { Book } from './book'

export interface ActionState {
  data?: { books: Book[] }
  fetching: boolean
  error?: Error
}

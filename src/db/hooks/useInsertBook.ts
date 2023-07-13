import { useCallback, useState } from 'react'
import { ActionState } from '@/types/actionState'
import { Book } from '@/types/book'
import { insertBook } from '../actions'

const useInsertBook = () => {
  const [, setMutationState] = useState<ActionState>({
    data: undefined,
    fetching: true,
    error: undefined,
  })

  const initializeMutation = useCallback(async (bookData: Book) => {
    try {
      return await insertBook(bookData)
    } catch (error) {
      setMutationState({
        data: undefined,
        fetching: false,
        error: error,
      })
      console.error(error)
    }
  }, [])

  const executeMutation = async (bookData: Book): Promise<ActionState> => {
    const insertedData = await initializeMutation(bookData)

    return {
      data: { books: [insertedData?.toJSON()] ?? [] },
      fetching: false,
      error: undefined,
    }
  }

  return [executeMutation]
}

export default useInsertBook

import React from 'react'
import { Book } from '@/types/book'
import { ActionState } from '@/types/actionState'
import useInsertBook from '@/db/hooks/useInsertBook'

export interface iCreateBookView {
  insertBook: (book: Book) => Promise<ActionState>
}

interface iCreateBookContainer {
  View: React.FC<iCreateBookView>
}

const CreateBookContainer = ({ View }: iCreateBookContainer) => {
  const [insertBook] = useInsertBook()
  return <View insertBook={insertBook} />
}

export default CreateBookContainer

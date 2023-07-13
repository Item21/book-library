import React, { useState } from 'react'
import { Book } from '@/types/book'
import useGetBooks from '@/db/hooks/useGetBooks'
import { CircularProgress } from '@mui/material'

export interface IBookListView {
  data: {
    books: Book[]
  }
  findWithName: React.Dispatch<React.SetStateAction<string>>
}

interface iBookListContainer {
  View: React.FC<IBookListView>
}

const BookListContainer = ({ View }: iBookListContainer) => {
  const [name, setName] = useState<string>()
  const [queryState] = useGetBooks(name)

  if (queryState?.fetching) return <CircularProgress />
  if (queryState?.error) return <div>isError - {queryState?.error?.message}</div>
  return <View data={queryState?.data} findWithName={setName} />
}

export default BookListContainer

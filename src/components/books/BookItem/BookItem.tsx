import React, { useState } from 'react'
import { Book } from '@/types/book'
import styles from './bookItem.module.scss'
import BookDetail from '@/components/books/BookDetail/BookDetail'

interface iBookItem {
  book: Book
}

const BookItem = ({ book }: iBookItem) => {
  const [showDetail, setShowDetail] = useState<boolean>(false)

  return (
    <>
      <li key={book?.name} className={styles.book} onClick={() => setShowDetail(true)}>
        <article>
          {book?.name}
          <span>{book?.author}</span>
        </article>
      </li>
      <BookDetail open={showDetail} onClose={() => setShowDetail(false)} book={book} />
    </>
  )
}

export default BookItem

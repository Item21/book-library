import React from 'react'
import { InputAdornment, List, TextField, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { IBookListView } from '@/components/books/containers/BookListContainer'
import BookItem from '@/components/books/BookItem/BookItem'
import styles from './createBook.module.scss'

const BookList = ({ data: { books }, findWithName }: IBookListView) => {
  return (
    <Box>
      <Box className={styles.inputBox}>
        <TextField
          id="input-with-icon-textfield"
          label="Search"
          size="small"
          className={styles.input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: 'white',
                  }}
                />
              </InputAdornment>
            ),
          }}
          onChange={(event) => {
            const value = event?.target?.value
            findWithName(value)
          }}
        />
      </Box>
      <Box>
        <List
          sx={{
            maxHeight: '333px',
            overflow: 'scroll',
            paddingRight: '10px',
          }}
        >
          {books?.map((book) => {
            return <BookItem book={book} key={book?.id} />
          })}
        </List>
      </Box>
    </Box>
  )
}

export default BookList

import React from 'react'

import CreateBookContainer from '@/components/books/containers/CreateBookContainer'
import CreateBook from '@/components/books/views/CreateBook'
import BookListContainer from '@/components/books/containers/BookListContainer'
import BookList from '@/components/books/views/BookList'
import { Grid } from '@mui/material'
import styles from '@/app.module.scss'

const App = () => {
  return (
    <div className={styles.bodyContainer}>
      <h1>Book library</h1>
      <div className={styles.container}>
        <Grid container p={'30px'} justifyContent={'center'} alignItems={'center'} spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <CreateBookContainer View={(props) => <CreateBook insertBook={props?.insertBook} />} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <BookListContainer View={(props) => <BookList data={props?.data} findWithName={props?.findWithName} />} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App

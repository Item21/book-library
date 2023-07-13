import React from 'react'
import { useFormik } from 'formik'
import { Box, Button, TextField } from '@mui/material'

import { iCreateBookView } from '@/components/books/containers/CreateBookContainer'
import { Book } from '@/types/book'
import styles from './createBook.module.scss'
import { Card } from '@/components/card/Card'
import { formValidationSchema } from '@/utils'

const CreateBook = ({ insertBook }: iCreateBookView) => {
  const initialValues: Book = {
    name: '',
    author: '',
    description: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (formValues) => {
      insertBook(formValues)
    },
  })

  return (
    <Card title={'Add new book'}>
      <form onSubmit={formik.handleSubmit}>
        <Box className={styles.inputBox}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            className={styles.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Box>
        <Box className={styles.inputBox}>
          <TextField
            fullWidth
            id="author"
            name="author"
            label="Author"
            className={styles.input}
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
          />
        </Box>
        <Box className={styles.inputBox}>
          <TextField
            fullWidth
            multiline
            id="description"
            name="description"
            label="Description"
            maxRows={5}
            className={styles.input}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Box>

        <Box className={styles.inputBox}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Card>
  )
}

export default CreateBook

import React from 'react'
import { Dialog, DialogContent, DialogTitle, Divider, List, ListItem } from '@mui/material'

import { Book } from '@/types/book'
import { Card } from '@/components/card/Card'

import styles from './bookDetail.module.scss'

interface iBookDetail {
  open: boolean
  onClose: () => void
  book: Book
}

const BookDetail = ({ open, onClose, book }: iBookDetail) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        className: `${styles.detailDialog}`,
      }}
    >
      <DialogTitle>Detail book - {book?.name}</DialogTitle>
      <DialogContent>
        <Card className={styles.card}>
          <div className={styles.cardContentBox}>
            <List>
              <Divider className={styles.divider}>Name</Divider>
              <ListItem>
                <span>{book?.name}</span>
              </ListItem>
              <Divider className={styles.divider}>Author</Divider>
              <ListItem>
                <span>{book?.author}</span>
              </ListItem>
              <Divider className={styles.divider}>Description</Divider>
              <ListItem>
                <span>{book?.description}</span>
              </ListItem>
            </List>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

export default BookDetail

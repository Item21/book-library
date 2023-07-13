import React from 'react'
import { Card as CardMui, CardHeader, CardContent } from '@mui/material'
import styles from './card.module.scss'
import classnames from 'classnames'
interface iCardProps {
  children: JSX.Element
  className?: string
  title?: string
}

export const Card = ({ children, title, className }: iCardProps) => {
  return (
    <CardMui variant="outlined" className={classnames([`${className} card`, styles.card])}>
      {title && <CardHeader title={title} />}
      <CardContent>{children}</CardContent>
    </CardMui>
  )
}

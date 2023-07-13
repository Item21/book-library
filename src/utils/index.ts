import { Book } from '@/types/book'
import * as yup from 'yup'

export const capitalize = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export const unCapitalize = (string: string) => {
  if (string) return string[0].toLowerCase() + string.slice(1)
}

export const formValidationSchema = yup.object<Book>({
  name: yup.string().required('Name is required'),
  author: yup.string().required('Author is required'),
  description: yup.string().max(300, 'Description must be at most 300 characters').required('Description is required'),
})

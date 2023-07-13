import { useCallback, useEffect, useState } from 'react'
import { Subscription } from 'rxjs'
import { getBooks } from '../actions'
import { ActionState } from '@/types/actionState'

const useGetBooks = (name?: string) => {
  const [queryState, setQueryState] = useState<ActionState>({
    data: undefined,
    fetching: true,
    error: undefined,
  })

  const fetchBooks = useCallback(async () => {
    return await getBooks(name)
  }, [name])

  useEffect(() => {
    let subscription: Subscription | undefined
    try {
      fetchBooks().then((query) => {
        subscription = query.$.subscribe((observedData) => {
          setQueryState({
            data: {
              books: observedData?.map((data) => data?.toJSON()) ?? [],
            },
            fetching: false,
            error: undefined,
          })
        })
      })
    } catch (error) {
      console.error(error)
    }

    return () => {
      subscription?.unsubscribe()
    }
  }, [fetchBooks, name])

  return [queryState]
}

export default useGetBooks

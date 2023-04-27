import React from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  
  const dispatch = useDispatch()


  return (
    <>
        <button
          onClick={() => dispatch(increment())}
>
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
>
          Decrement
        </button>
      </>
  )
}
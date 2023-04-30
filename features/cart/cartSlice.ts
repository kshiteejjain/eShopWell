import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number;
  products: object
}

const initialState: CounterState = {
  value: 0,
  products : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        if(state.value <= 0){
            alert('Cannot reduce then zero')
        }else{
            state.value -= 1
        }
    },
    arrayData: (state, action) => {
      state.products = action.payload;
      console.log(action);
    },
  },
})

export const { increment, decrement, arrayData } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // payload is argument that we passed to increment
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch)=>{
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
}

export default counterSlice.reducer
import { useState } from "react";
import { createSlice } from '@reduxjs/toolkit'


const initialValue = {
    value: 0
}

const counterSlice = createSlice({
    initialState: initialValue,
    name:'Counter',
    reducers: {
        increase(state){
            state.value++
        },

        decrease(state){
            state.value--
        },
    }
})

export const {increase, decrease} = counterSlice.actions
export default counterSlice.reducer
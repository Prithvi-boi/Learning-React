import { createSlice } from '@reduxjs/toolkit'

const  initialState = {
    value: 'DD/MM/YYYY',
  }

export const dateSlice = createSlice({
  name: 'currentDate',
  initialState,

  reducers: {
    currentDate(state) {
        let t = new Date()
        state.value = `${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`
    },

    prithviBirthday(state){
        state.value = `13/04/2006`
    }
  },
})

export const {currentDate,prithviBirthday } = dateSlice.actions;
export default dateSlice.reducer
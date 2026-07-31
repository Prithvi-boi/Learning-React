import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './slices/dateSlice'
import counterReducer from './slices/counterSlice'


const store = configureStore({
  reducer: {
    dateSliceKey : dateSlice,
    counterSlicekey: counterReducer
  },
})
export default store

// Redux workflow:
/*
    1. Configure store
    2. import store and provider in main.jsx. Then render the app using provider with param configured stored
    3. create slices and use in components
*/
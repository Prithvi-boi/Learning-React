import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './slices/dateSlice'


const store = configureStore({
  reducer: {
    dateSliceKey : dateSlice
  },
})
export default store

// Redux workflow:
/*
    1. Configure store
    2. import store and provider in main.jsx. Then render the app using provider with param configured stored
    3. create slices and use in components
*/
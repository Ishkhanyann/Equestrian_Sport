import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../feauters/sliderSlice'

export default configureStore({
  reducer: {
    slider: sliderReducer,
  }
})

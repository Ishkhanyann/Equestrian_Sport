import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../feauters/sliderSlice'
import competitionsReducer from './../feauters/CompetitionsSlice';

export default configureStore({
  reducer: {
    slider: sliderReducer,
    competitions: competitionsReducer
  }
})

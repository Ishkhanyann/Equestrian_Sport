import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../feauters/sliderSlice'
import competitionsReducer from './../feauters/CompetitionsSlice';
import trainersReducer from './../feauters/Trainers';

export default configureStore({
  reducer: {
    slider: sliderReducer,
    competitions: competitionsReducer,
    trainers: trainersReducer
  }
})

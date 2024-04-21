import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../feauters/sliderSlice'
import competitionsReducer from './../feauters/CompetitionsSlice';
import trainersReducer from './../feauters/Trainers';
import timeTableReducer from './../feauters/TimeTable.slice';

export default configureStore({
  reducer: {
    slider: sliderReducer,
    competitions: competitionsReducer,
    trainers: trainersReducer,
    timeTable: timeTableReducer
  }
})

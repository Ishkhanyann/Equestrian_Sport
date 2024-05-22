import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../feauters/sliderSlice'
import competitionsReducer from './../feauters/CompetitionsSlice';
import trainersReducer from './../feauters/Trainers';
import timeTableReducer from './../feauters/TimeTable.slice';
import productsReducer from '../feauters/ProductsSlice';
import CoursesReducer from '../feauters/CoursesSlice';

export default configureStore({
  reducer: {
    slider: sliderReducer,
    competitions: competitionsReducer,
    trainers: trainersReducer,
    timeTable: timeTableReducer,
    products: productsReducer,
    courses: CoursesReducer,
  }
})

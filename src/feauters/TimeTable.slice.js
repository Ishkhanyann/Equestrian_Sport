import { createSlice } from '@reduxjs/toolkit';

const initialTableValue = [
  {
    Id: 2,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false,
    Status: 'Completed',
    Priority: 'High'
  },
]

const timeTableSlice = createSlice({
  name: "timeTable",
  initialState: initialTableValue,
  reducers: {}
})

export default timeTableSlice.reducer;
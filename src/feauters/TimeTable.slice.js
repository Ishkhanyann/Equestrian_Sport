import { createSlice } from '@reduxjs/toolkit';

const initialTableValue = [
  {
    Id: 2,
    Subject: 'Meeting',
    StartTime: '',
    EndTime: '',
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
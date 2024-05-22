import { createSlice } from '@reduxjs/toolkit';

const initialCoureseValue =[
  {
    id:1,
    price: 300,
    desc: {
      first: 'Horse Riding Basics',
      second: 'Horse Care and Saddle up',
      third: 'Psychological support',
      fourth: 'Safety precautions',
      fiveth: 'Development of balance and coordination'
    }
  },
  {
    id:2,
    price: 500,
    desc: {
      first: 'Horse Riding Basics',
      second: 'Horse Care and Saddle up',
      third: 'Psychological support',
      fourth: 'Safety precautions',
      fiveth: 'Development of balance and coordination',
      sixth: 'Training in specific disciplines',
      seventh: 'Individual Training and Support'
    }
  },
  {
    id:3,
    rank: '',
    price: 800,
    desc: {
      first: 'Horse Riding Basics',
      second: 'Horse Care and Saddle up',
      third: 'Psychological support',
      fourth: 'Safety precautions',
      fiveth: 'Development of balance and coordination',
      sixth: 'Training in specific disciplines',
      seventh: 'Individual Training and Support',
      eighth: 'Leadership Skills Development'
    }
  },
]

const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialCoureseValue,
  reducers: {}
})

export default coursesSlice.reducer
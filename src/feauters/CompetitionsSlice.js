import { createSlice } from '@reduxjs/toolkit';

const initialStateCompetitions = [
  {
    id: 1,
    name: 'Longines Global Champions Tour',
    date: '21-23 March 2024',
    place: 'Tokyo',
    discipline: 'Show Jumping',
    rank: 'CSI*5',
    img: '../../../public/E/img4.png'
  },
  {
    id: 2,
    name: 'World Cup',
    date: '2 April 2024',
    place: 'Paris',
    discipline: 'Dressage',
    rank: 'Grand Prix',
    img: '../../../public/E/img1.png'
  },
]

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState: initialStateCompetitions,
  reducers: {}
})

export default competitionsSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const initialStateCompetitions = [
  {
    id:1,
    name: 'Longines Global Champions Tour',
    date: '21-23 March 2024',
    place: 'Paris',
    discipline: 'Show Jumping',
    rank: 'CSI*5',
    img: '../../../public/E/A-competition1_LE_photos_v2_x2.jpg'
  },
  {
    id:2,
    name: 'Melbourne Cup',
    date: '1-2 April 2024',
    place: 'Tokyo',
    discipline: 'Horse Racing',
    rank: 'Class 1',
    img: '../../../public/E/A-competition2_LE_photos_v2_x2.jpg'
  },
  {
    id:3,
    name: 'FEI Eventing',
    date: '15 April 2024',
    place: 'London',
    discipline: 'Eventing',
    rank: 'CCI4*-L',
    img: '../../../public/E/A-competition3_LE_photos_v2_x2.jpg'
  },
  {
    id:4,
    name: 'World Cup',
    date: '7 May 2024',
    place: 'Doha',
    discipline: 'Dressage',
    rank: 'Grand Prix',
    img: '../../../public/E/A-competition4_LE_photos_v2_x2.jpg'
  },
]

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState: initialStateCompetitions,
  reducers: {}
})

export default competitionsSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const initialStateCompetitions = [
  {
    id: 1,
    date: '21-23 March 2024',
    place: 'Hong Kong',
    img: '../../../public/E/img4.png',
    logo: '../../../public/Icons/LM.png',
    desc: 'Longines Masters of',
    arena: 'Asiaworld-expo'
  },
  {
    id: 2,
    date: '2 April 2024',
    place: 'Paris',
    img: '../../../public/E/img1.png',
    logo: '../../../public/Icons/LM.png',
    desc: 'Longines Masters of',
    arena: 'Paris Nord Villepinte'
  },
]

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState: initialStateCompetitions,
  reducers: {}
})

export default competitionsSlice.reducer
// import { createSlice } from "@reduxjs/toolkit";

// const initialItemsValue = {
//   data: [ 
//     {
//       id:5,
//       cat: 'Show Jumping',
//       price: "$1000",
//       name: "Saddle",
//       desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.',
//       rate: '7.8',
//       state: 'sold',
//       img: '../../public/S/saddle.jpg'
//     },
//     {
//       id:2,
//       cat: 'Show Jumping',
//       price: "$500",
//       name: "Girth",
//       desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.',
//       rate: '9.1',
//       state: 'new',
//       img: '../../public/S/girth.jpg'
//     },
//     {
//       id:3,
//       cat: 'Dressage',
//       price: "$300",
//       name: "Stirrup",
//       desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.',
//       rate: '7.1',
//       state: '',
//       img: '../../public/S/stirrup.jpg'
//     },
//     {
//       id:4,
//       cat: 'Dressage',
//       price: "$750",
//       name: "Jacket",
//       desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nisi.',
//       rate: '8.6',
//       state: '',
//       img: '../../public/S/jk.jpg'
//     },
//   ],
// }

// const itemSlice = createSlice({
//   name: 'items',
//   initialState: initialItemsValue,
//   reducers: {
//     showItem: (state, action) => {
//       const result = state.data.filter((e) => e.id == action.payload.id);
//       return{
//         ...state,
//         item: result
//       }
//     },
//   }
// })

// export default itemSlice.reducer
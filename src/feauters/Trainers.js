import { createSlice } from "@reduxjs/toolkit";

const initialStateTrainers = [
  {
    id: 1,
    name: "Emily Hernandez",
    specialization: "Dressage",
    experience: 8,
    img: "../../../public/E/C-trainer1.png",
    image: "../../../public/E/C-trainer1(2).jpg",
  },
  {
    id: 2,
    name: "Daniel Clark",
    specialization: "Show Jumping",
    experience: 17,
    img: "../../../public/E/C-trainer2.png",
    image: "../../../public/E/C-trainer2(2).jpg",
  },
  {
    id: 3,
    name: "Steven Hill",
    specialization: "Race",
    experience: 13,
    img: "../../../public/E/C-trainer3.png",
    image: "../../../public/E/C-trainer3(2).jpg",
  },
  {
    id: 4,
    name: "Isabella Campbell",
    specialization: "Show Jumping",
    experience: 10,
    img: "../../../public/E/C-trainer4.png",
    image: "../../../public/E/C-trainer4(2).jpg",
  },
]

const trainersSlice = createSlice({
  name: "trainers",
  initialState: initialStateTrainers,
  reducers: {
    changeTrainer: (state, action) => {
      const trainer = state.filter((e) => e.id == action.payload);
      return trainer;
    },
  },
});

export default trainersSlice.reducer;
export const { changeTrainer } = trainersSlice.actions;

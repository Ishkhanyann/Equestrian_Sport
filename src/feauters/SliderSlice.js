import { createSlice } from "@reduxjs/toolkit";

const initalSlidesValue = [
  {
    id: 1,
    title: "Henric von Eckerman",
    desc: "Truly understanding your horse is the most important key to success",
    image: "../../../public/E/H-slide1.jpg",
  },
  {
    id: 2,
    title: "Ben Maher",
    desc: "Riding a horse is like flying a plane, they’re not machines but it’s a lot of hours, a lot of time to go into building the relationship.",
    image: "../../../public/E/H-slide2.jpg",
  },
  {
    id: 3,
    title: "Daniel Deusser",
    desc: "Good horses are hard to find, they don’t run around for you to choose. In the and, you have to make them yourself.",
    image: "../../../public/E/H-slide3.jpg",
  },
  {
    id: 4,
    title: "Scott Brash",
    desc: "You can never stop learning, and the most we can learn from our horses.",
    image: "../../../public/E/H-slide4.jpg",
  },
  {
    id: 5,
    title: "Steve Guerdat",
    desc: "I try to listen to what my horses tell me, consider their point of view and make decisions based on that. Although we speak different languages, I spend every day with them and learn new things, including about myself",
    image: "../../../public/E/H-slide5.jpg",
  },
];

const sliderSlice = createSlice({
  name: "slider",
  initialState: initalSlidesValue,
  reducers: {},
});

export default sliderSlice.reducer;

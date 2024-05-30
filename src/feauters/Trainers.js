import { createSlice } from "@reduxjs/toolkit";

const initialStateTrainers = {
  trainers: [
    {
      id: 1,
      name: "Emily Roberts",
      specialization: "Dressage Maestro",
      experience: 20,
      about: `With years of experience in the art of dressage, Emily brings a blend of precision and elegance to her training sessions. Her keen eye for detail and patient demeanor make her a favorite among riders looking to perfect their form and connection with their equine partners.`,
      img: "../../../public/E/C-trainer1.png",
      image: "../../../public/E/C-trainer1(2).jpg",
    },
    {
      id: 2,
      name: "Marcus Taylor",
      specialization: "Natural Horsemanship Guru",
      experience: 37,
      about: `Grounded in the principles of natural horsemanship, Marcus advocates for a holistic approach to horse training based on trust, respect, and clear communication. Through gentle yet effective methods, Marcus helps riders develop a deeper understanding of their equine partners, fostering a bond built on mutual trust and cooperation.`,
      img: "../../../public/E/C-trainer2.png",
      image: "../../../public/E/C-trainer2(2).jpg",
    },
    {
      id: 3,
      name: "Jackson Reed ",
      specialization: "Western Riding Virtuoso",
      experience: 28,
      about: `Born and raised in the heart of cowboy country, Jackson embodies the spirit of the American West in his approach to Western riding. From mastering the art of reining to navigating challenging trail obstacles, Jackson's intuitive understanding of horse and rider fosters a sense of confidence and camaraderie in his students.`,
      img: "../../../public/E/C-trainer3.png",
      image: "../../../public/E/C-trainer3(2).jpg",
    },
    {
      id: 4,
      name: "Sophie Nguyen",
      specialization: " Show Jumping Dynamo",
      experience: 42,
      about: `As a former competitive show jumper, Sophie brings a wealth of knowledge and experience to her training sessions. Her dynamic coaching style emphasizes technique, agility, and fearless determination, empowering riders to conquer even the most daunting of jumps with grace and finesse.`,
      img: "../../../public/E/C-trainer4.png",
      image: "../../../public/E/C-trainer4(2).jpg",
    },
  ],

  trainer: [
    {
      id: 1,
      name: "Emily Hernandez",
      specialization: "Dressage",
      experience: 8,
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, a molestias? Recusandae exercitationem sed fugiat, ex, mollitia dolorem dolores, totam maiores accusantium ab temporibus aliquid vel ea explicabo debitis atque.`,
      img: "../../../public/E/C-trainer1.png",
      image: "../../../public/E/C-trainer1(2).jpg",
    },
  ]
};

const trainersSlice = createSlice({
  name: "trainers",
  initialState: initialStateTrainers,
  reducers: {
    changeTrainer: (state, action) => {
      const trainer = state.trainers.filter((e) => e.id == action.payload);
      return {
        ...state,
        trainer : trainer
      }
    },
  },
});

export default trainersSlice.reducer;
export const { changeTrainer } = trainersSlice.actions;

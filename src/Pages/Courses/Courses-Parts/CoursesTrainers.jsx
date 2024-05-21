import React, { useState } from "react";
import "../Courses.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTrainer } from "../../../feauters/Trainers";

export default function CoursesTrainers() {
  const trainers = useSelector((state) => state.trainers.trainers);
  const dispatch = useDispatch();
  const trainer = useSelector(state => state.trainers.trainer)

  return (
    <div className="CoursesTrainers">
      {trainer.map((e) => {
        return (
          <div className="trainer" key={e.id}>
            <span className="trainer-img">
              <img src={e.img} alt="" />
            </span>
            <div className="trainer-about">
              <h1>{e.name}</h1>
              <h3>Specislization: {e.specialization}</h3>
              <h3>Experience: {e.experience}</h3>
              <p>About: {e.about}</p>
            </div>
          </div>
        );
      })}
      <div className="trainers">
        {trainers.map((e) => {
          return (
            <span key={e.id}>
              <img
                src={e.image}
                onClick={() => dispatch(changeTrainer(e.id))}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}

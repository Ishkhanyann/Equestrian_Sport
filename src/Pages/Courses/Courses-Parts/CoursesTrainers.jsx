import React, { useState } from "react";
import "../Courses.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTrainer } from "../../../feauters/Trainers";

export default function CoursesTrainers() {
  const trainers = useSelector((state) => state.trainers)
  console.log(trainers);
  const dispatch = useDispatch()
  return (
    <div className="CoursesTrainers">

      <div className="trainers">
        {trainers.map((e) => {
          return (
            <span key={e.id}>
              <img src={e.image} onClick={()=>dispatch(changeTrainer(e.id))}/>
            </span>
          );
        })}
      </div>
    </div>
  );
}

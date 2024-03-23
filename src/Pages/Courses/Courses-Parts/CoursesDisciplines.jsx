import React, { useState } from "react";
import "../Courses.scss";

export default function CoursesDisciplines() {
  const [disciplines] = useState([
    "Show Jumping",
    "Dressage",
    "Eventing",
    "Horse Racing",
  ]);
  return (
    <div className="CoursesDisciplines">
      <div className="Disciplines">
        {
          disciplines.map((e, i)=> {
            return(
              <ul key={i}>
                <li>{e}</li>
              </ul>
            )
          })
        }
      </div>
      <div className="Images">
        <img className="jumping" src="../../../public/E/C-disciplines1_LE_photos_v2_x2.jpg" alt="" />
        <img className="race" src="../../../public/E/C-disciplines2_LE_photos_v2_x2.jpg" alt="" />
        <img className="dressage" src="../../../public/E/C-disciplines3_LE_photos_v2_x2.jpg" alt="" />
        <img className="eventing" src="../../../public/E/C-disciplines4_LE_photos_v2_x2.jpg" alt="" />
      </div>
    </div>
  );
}

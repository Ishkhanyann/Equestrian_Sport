import React from "react";
import "../Courses.scss";

export default function CoursesMain() {
  return (
    <div className="CoursesMain">
      <div className="CoursesMain-Title">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          nobis, cumque ipsa at esse vel voluptas error recusandae, iure illum
          beatae perspiciatis quis mollitia quo vero non? Sint, neque saepe!
        </p>
      </div>
      <div className="CoursesMain-Img">
        <div className="full"></div>
        <div className="border"></div>
        <img src="../../../public/E/C-main_LE_photos_v2_x2.jpg" alt="" />
      </div>
    </div>
  );
}

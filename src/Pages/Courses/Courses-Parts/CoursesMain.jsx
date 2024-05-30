import React from "react";
import "../Courses.scss";

export default function CoursesMain() {
  return (
    <div className="CoursesMain">
      <div className="CoursesMain-Title">
        <h1>Saddle Up: Explore the World of Horse Riding Adventures</h1>
        <p>
          Join our vibrant community of horse lovers from around the globe and
          share your passion for these magnificent creatures. From leisurely
          trail rides to exhilarating show jumping competitions, there's
          something for every rider to enjoy.
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

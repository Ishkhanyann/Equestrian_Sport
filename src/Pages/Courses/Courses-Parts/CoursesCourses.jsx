import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../Courses.scss";

export default function CoursesCourses() {
  const coursesSlider = useSelector((state) => state.courses);
  const settings = {
    className: "center",
    centerMode: true,
    arrows: false, 
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500
  };

  console.log(coursesSlider);
  return (
    <div className="Courses-slider">
      <Slider {...settings}>
        {coursesSlider.map((e) => (
          <div key={e.id} className="course-card">
            <h1>${e.price}</h1>
            <p>{e.desc.first}</p>
            <p>{e.desc.second}</p>
            <p>{e.desc.third}</p>
            <p>{e.desc.fourth}</p>
            <p>{e.desc.fiveth}</p>
            <p>{e.desc?.sixth}</p>
            <p>{e.desc?.seventh}</p>
            <p>{e.desc?.eighth}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

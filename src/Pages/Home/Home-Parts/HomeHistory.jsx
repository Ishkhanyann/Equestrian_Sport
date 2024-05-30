import React from "react";
import "../../Home/Home.scss";

export default function HomeHistory() {
  return (
    <div className="Home-History">
      <div className="Home-imgs">
        <img
          className="Home-image1"
          src="../../../public/E/H-about1_LE_photos_v2_x2.jpg"
          alt=""
        />
        <img
          className="Home-image2"
          src="../../../public/E/H-about2_LE_auto_x2.jpg"
          alt=""
        />
      </div>
      <div className="Home-Text-Container">
        <h1>Expert guidance, safe rides. Join the adventure!</h1>
        <div className="Home-Text">
        At our horse riding center, we prioritize 
        safety without compromising on the thrill 
        and adventure of riding. Our experienced 
        instructors are dedicated to helping you 
        build confidence in the saddle while 
        fostering a deep connection with these 
        majestic animals. 
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
}

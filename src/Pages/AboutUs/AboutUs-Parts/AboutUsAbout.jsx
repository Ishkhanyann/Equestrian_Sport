import React from "react";
import "../AboutUs.scss";

export default function AboutUsAbout() {
  return (
    <div className="AboutUs-About">
      <div className="AboutUs-img">
        <img src="../../../public/E/A-img_LE_photos_v2_x2.jpg" alt="" />
      </div>
      <div className="AboutUs-Container">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="AboutUs-zrt">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptas molestias, culpa corrupti ut aliquam quae, optio
            praesentium suscipit libero nostrum eum. Odit, distinctio ducimus!
            Porro eveniet consectetur nemo totam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cupiditate voluptas molestias, culpa
            corrupti ut aliquam quae, optio praesentium suscipit libero nostrum
            eum. Odit, distinctio ducimus! Porro eveniet consectetur nemo totam?
          </span>
          <button>Read More</button>
        </div>
        <div className="AboutUs-numbers">
          <p>10+</p>
          <p>257</p>
          <p>147</p>
          <p>99</p>
        </div>
      </div>
    </div>
  );
}

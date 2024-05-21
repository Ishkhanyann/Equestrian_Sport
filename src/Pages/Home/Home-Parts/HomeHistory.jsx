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
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div className="Home-Text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Minima temporibus quam, molestiae autem eaque fuga, 
          laboriosam libero incidunt, maiores quaerat ullam 
          eius corporis qui dicta sapiente reprehenderit ipsa 
          cum labore? A necessitatibus ea iusto consectetur 
          repellendus obcaecati deserunt. Facere aliquid 
          error temporibus ut assumenda quos dolorem veritatis 
          fuga omnis inventore. 
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
}

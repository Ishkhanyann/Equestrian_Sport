import React from "react";
import "../AboutUs.scss";

export default function AboutUsHeader() {
  return (
    <div className="AboutUs-Header">
      <div className="AboutUs-imgs">
        <div className="AboutUs-color1"></div>
        <div className="AboutUs-color2"></div>
        <img src="../../../public/E/A-main_LE_photos_v2_x2.jpg" alt="" />
      </div>
      <div className="AboutUs-main">
        <h1>Ride Beyond: Your Premier Horse Riding Destination</h1>
        <p>
          At Ride Beyond, we're passionate about bringing the joy of horse
          riding to enthusiasts of all levels. Our experienced team offers
          expert instruction in a safe and welcoming environment, ensuring
          memorable experiences for every rider. Join us on a journey where the
          beauty of nature meets the thrill of horseback riding, and let's
          create unforgettable moments together.
        </p>
      </div>
    </div>
  );
}

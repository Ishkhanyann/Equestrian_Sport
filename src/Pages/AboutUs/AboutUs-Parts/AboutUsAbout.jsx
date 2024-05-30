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
          Proud Achievements: Celebrating Milestones at Our Horse Riding Hub
        </h1>
        <div className="AboutUs-zrt">
          <span>
            From fostering confident riders to championing equestrian
            excellence, our achievements stand as a testament to our commitment
            to the equestrian community. With accolades in safety standards,
            rider development, and community engagement, we continue to push
            boundaries and inspire a love for horses in all who visit our hub.
            Join us as we celebrate our milestones and embark on new horizons in
            the world of horse riding.
          </span>
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

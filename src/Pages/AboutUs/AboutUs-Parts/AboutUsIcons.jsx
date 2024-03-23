import React, { useState } from "react";

export default function AboutUsIcons() {
  const [icons] = useState([
    "../../../public/Icons/A-logo1.png",
    "../../../public/Icons/A-logo2.png",
    "../../../public/Icons/A-logo3.png",
    "../../../public/Icons/A-logo4.png",
    "../../../public/Icons/A-logo5.png",
  ]);
  return (
    <div className="AboutUs-Icons">
      {icons.map((e, index) => {
        return <span key={index}>
          <img className={`AboutUsDesign${index}`} src={e} alt="" />
        </span>;
      })}
    </div>
  );
}

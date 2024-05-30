import React, { useState } from "react";
import { SiMercedes } from "react-icons/si";
import "./Footer.scss";

export default function Footer() {
  const [icons] = useState([
    "../../../public/Icons/F-logo2.png",
    "../../../public/Icons/F-logo1.png",
    "../../../public/Icons/F-logo3.png",
  ])
  const [footer, setFooter] = useState([
    {
      id:1,
      name: "Club",
      desc: "Welcome to Trequus Capital, where equestrian enthusiasts come together to share their passion for horses. ",
    },
    {
      id:2,
      name: "Navigation",
      desc: "Trequus Capital-789 Bridle Path Road-Santa Barbara, California 93101",
    },
    {
      id:3,
      name: "Information",
      desc: "Phone: +1 (123) 456-7890  Email: info@greenmeadowsstables.com",
    },
    {
      id:4,
      name: "Opening Hours",
      desc: "Monday - Friday: 8:00 AM - 8:00 PM -Saturday - Sunday: 9:00 AM - 6:00 PM",
    },
  ]);

  return (
    <div className="Footer">
      <div className="Footer-box" >
      {footer.map((e) => {
        return (
          <span key={e.id}>
            <h4>{e.name}</h4>
            <p>{e.desc}</p>

          </span>
        );
      })}
          </div>
      <div className="Footer-icons">
      {
        icons.map((e, _index) => {
          return <img src={e} alt="" key={_index} />
        })
      }
      </div>
    </div>
  );
}

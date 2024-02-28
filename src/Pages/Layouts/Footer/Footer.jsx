import React, { useState } from "react";
import { SiMercedes } from "react-icons/si";
import "./Footer.scss";

export default function Footer() {
  const [icons] = useState([
    "https://i.pinimg.com/originals/a3/be/88/a3be8829747c290a0ab9d09918979c04.png",
    "https://totiequestrian.com/cdn/shop/files/Toti_Emblem_Prmry_Color.png?v=1667506479",
    "https://inside.fei.org/sites/default/files/pictures/FEI_Logo_RGB_Purple_HR.png"
  ])
  const [footer, setFooter] = useState([
    {
      id:1,
      name: "Club",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro!",
    },
    {
      id:2,
      name: "Navigation",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro!",
    },
    {
      id:3,
      name: "Information",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro!",
    },
    {
      id:4,
      name: "Opening Hours",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro!",
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

import React, { useState } from "react";
import "../../Home/Home.scss";

export default function HomeWCU() {
  const [about] = useState([
    {
      id: 1,
      icon: "../../../public/Icons/3524659.png",
      title: `Lorem ipsum dolor sit amet.`,
      desc: `Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. 
      Ratione unde officiis sit tempore animi 
      praesentium exercitationem magni iste! 
      Amet, quibusdam?`,
    },
    {
      id: 2,
      title: `Lorem ipsum dolor sit amet.`,
      desc: `Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. 
      Ratione unde officiis sit tempore animi 
      praesentium exercitationem magni iste! 
      Amet, quibusdam?`,
    },
    {
      id: 3,
      icon: "../../../public/Icons/3524659.png",
      title: `Lorem ipsum dolor sit amet.`,
      desc: `Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. 
      Ratione unde officiis sit tempore animi 
      praesentium exercitationem magni iste! 
      Amet, quibusdam?`,
    },
    {
      id: 4,
      icon: "../../../public/Icons/3524659.png",
      title: `Lorem ipsum dolor sit amet.`,
      desc: `Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. 
      Ratione unde officiis sit tempore animi 
      praesentium exercitationem magni iste! 
      Amet, quibusdam?`,
    },
    {
      id: 5,
      icon: "../../../public/Icons/3524659.png",
      title: `Lorem ipsum dolor sit amet.`,
      desc: `Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. 
      Ratione unde officiis sit tempore animi 
      praesentium exercitationem magni iste! 
      Amet, quibusdam?`,
    },
  ]);
  return (
    <div className="Home-WCU">
      {about.map((e) => {
        return (
          <div className={`Home-about${e.id}`} key={e.id}>
            <span>
              <img src={e.icon} />
              <h3>{e.title}</h3>
            </span>
            <p>{e.desc}</p>
          </div>
        );
      })}
      <div className="Home-img"></div>
    </div>
  );
}

import React from "react";
import "../AboutUs.scss";
import { useState } from "react";

export default function AboutUsStables() {
  const [stables] = useState([
    {
      id: 1,
      title: "a",
      icon: '../../public/Icons/stable.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 2,
      title: "b",
      icon: '../../../public/Icons/sun.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 3,
      title: "c",
      icon: '../../../public/Icons/magnet.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 4,
      title: "d",
      icon: '../../../public/Icons/finish.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 5,
      title: "e",
      icon: '../../../public/Icons/stall.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 6,
      title: "f",
      icon: '../../../public/Icons/resort.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 7,
      title: "g",
      icon: '../../../public/Icons/vet.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 8,
      title: "h",
      icon: '../../../public/Icons/settings.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
  ]);
  return <div className="AboutUs-Stables">
    {
      stables.map(e => {
        return (
          <div className="stable" key={e.id}>
            <img src={e.icon} alt="" />
            <p>{e.desc}</p>
          </div>
        )
      })
    }
  </div>;
}

import React from "react";
import "../AboutUs.scss";
import { useState } from "react";

export default function AboutUsStables() {
  const [stables] = useState([
    {
      id: 1,
      title: "a",
      icon: '../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 2,
      title: "b",
      icon: '../../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 3,
      title: "c",
      icon: '../../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 4,
      title: "d",
      icon: '../../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 5,
      title: "e",
      icon: '../../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 6,
      title: "f",
      icon: '../../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 7,
      title: "g",
      icon: '../../../public/Icons/iii.png',
      desc: `Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Vitae dicta ipsum aliquid quas,
      numquam quam similique aliquam ducimus illo non?`,
    },
    {
      id: 8,
      title: "h",
      icon: '../../../public/Icons/iii.png',
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
            {/* <span>{e.icon}</span> */}
            <img src={e.icon} alt="" />
            <p>{e.desc}</p>
          </div>
        )
      })
    }
  </div>;
}

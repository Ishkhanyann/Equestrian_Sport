import React from "react";
import "../AboutUs.scss";
import { useState } from "react";

export default function AboutUsStables() {
  const [stables] = useState([
    {
      id: 1,
      title: "Stables",
      icon: '../../public/Icons/stable.png',
      desc: `Trequus Capital offers three options of 
      stables - summer stables, winter stables and guest stables`,
    },
    {
      id: 2,
      title: "Lounging barrels",
      icon: '../../../public/Icons/sun.png',
      desc: `There are two indoor and two aoutdoor barrels. 
      Diameter of each barrel is 18 meters, heigth of the 
      sidewalls - 1.5 meters`,
    },
    {
      id: 3,
      title: "Automatic walkers",
      icon: '../../../public/Icons/magnet.png',
      desc: `Two German walkers are located in a single complex of 
      winter and guest stables - next to the indoor "barrels"`,
    },
    {
      id: 4,
      title: "Indoor arenas",
      icon: '../../../public/Icons/finish.png',
      desc: `Arena 68 x 26 meters with mirrors along 
      the sidewalls and "Grand Manage" 80x 40x meters 
      with stands for 1,000 people`,
    },
    {
      id: 5,
      title: "Paddocks",
      icon: '../../../public/Icons/stall.png',
      desc: ` Trequus Capital Center 
      boasts 22 carefully crafted paddocks. 
      These paddocks offer everything a
       horse could desire`,
    },
    {
      id: 6,
      title: "Outdoor arenas",
      icon: '../../../public/Icons/resort.png',
      desc: `4 aoutdoor arenas with night light and 
      European quality working surface`,
    },
    {
      id: 7,
      title: "Veterinarian Clinic",
      icon: '../../../public/Icons/vet.png',
      desc: `Modern Veterianian clicic Trequus Vet. `,
    },
    {
      id: 8,
      title: "Hotel",
      icon: '../../../public/Icons/settings.png',
      desc: `Trequus Capital Hotel - a country hotel one of 
      the Trequus Capital Hotels, "4 stars" category`,
    },
  ]);
  return <div className="AboutUs-Stables">
    {
      stables.map(e => {
        return (
          <div className="stable" key={e.id}>
            <img src={e.icon} alt="" />
            <h4>{e.title}</h4>
            <p>{e.desc}</p>
          </div>
        )
      })
    }
  </div>;
}

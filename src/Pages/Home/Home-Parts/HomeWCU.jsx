import React, { useState } from "react";
import "../../Home/Home.scss";

export default function HomeWCU() {
  const [about] = useState([
    {
      id: 1,
      icon: "../../../public/Icons/rating.png",
      title: `Expertise`,
      desc: `Our team comprises experienced 
      professionals dedicated to all things 
      equine, providing unparalleled knowledge 
      in horse care, training, and more.`,
    },
    {
      id: 2,
      title: `Why Choose Us?`,
      desc: `Choose us for horse riding because 
      we prioritize safety with expert instruction 
      nd well-trained horses. Our diverse programs 
      cater to all skill levels, offering an 
      enjoyable experience for everyone. `,
    },
    {
      id: 3,
      icon: "../../../public/Icons/community.png",
      title: `Diversity`,
      desc: `We celebrate the vast diversity 
      within the horse world, offering insights 
      into various breeds, disciplines, and 
      cultural aspects surrounding these 
      majestic animals.`,
    },
    {
      id: 4,
      icon: "../../../public/Icons/communities.png",
      title: `Community`,
      desc: `Join our inclusive community of 
      horse enthusiasts, where you can seek 
      advice, share stories, and connect 
      with like-minded individuals passionate 
      about horses.`,
    },
    {
      id: 5,
      icon: "../../../public/Icons/creativity.png",
      title: `Inspiration`,
      desc: `Get inspired by the beauty 
      and grace of horses through our 
      engaging content, including captivating 
      imagery, heartwarming stories, and 
      informative articles.`,
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

import React from 'react'
import "../AboutUs.scss";
import { useState } from 'react';

export default function AboutUsHorses() {
  const [horses] = useState([
    {
      id: 1,
      img: "../../../public/E/A-horse1.JPG"
    },
    {
      id: 2,
      img: "../../../public/E/A-horse2.jpg"
    },
    {
      id: 3,
      img: "../../../public/E/A-horse3.jpg"
    },
    {
      id: 4,
      img: "../../../public/E/A-horse4.jpg"
    },
    {
      id: 5,
      img: "../../../public/E/A-horse5.jpg"
    },
    {
      id: 6,
      img: "../../../public/E/A-horse6.JPG"
    },
  ])
  return (
    <div className='About-Horses'>
      <div className='About-Container'>
        {
          horses.map(e => {
            return(
              <img className={`About-Horse${e.id}`} key={e.id} src={e.img}/>
            )
          })
        }
      </div>
    </div>
  )
}

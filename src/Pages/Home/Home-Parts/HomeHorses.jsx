import React, { useState } from 'react'
import "../../Home/Home.scss";

export default function HomeHorses() {
  const [horses] = useState([
    {
      id: 1,
      img: "../../../public/E/H-horse1_LE_photos_v2_x2.jpg"
    },
    {
      id: 2,
      img: "../../../public/E/H-horse2_LE_photos_v2_x2.jpg"
    },
    {
      id: 3,
      img: "../../../public/E/H-horse3_LE_photos_v2_x2.jpg"
    },
    {
      id: 4,
      img: "../../../public/E/H-horse4_LE_photos_v2_x2.jpg"
    },
    {
      id: 5,
      img: "../../../public/E/H-horse5_LE_photos_v2_x2.jpg"
    },
    {
      id: 6,
      img: "../../../public/E/H-horse6_LE_photos_v2_x2.jpg"
    },
  ])
  return (
    <div className='Home-Horses'>
      <div className='Home-Container'>
        {
          horses.map(e => {
            return(
              <img className={`Home-Horse${e.id}`} key={e.id} src={e.img}/>
            )
          })
        }
      </div>
    </div>
  )
}

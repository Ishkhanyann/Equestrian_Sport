import React from 'react'
import "../AboutUs.scss";
import { useState } from 'react';

export default function AboutUsHorses() {
  const [horses] = useState([
    {
      id: 1,
      name: "Assault",
      img: "../../../public/E/A-horse1.JPG",
      pedigree: {
        1: "Bold Venture", 
        2: "Igual", 
        3: "St. Germans", 
        4: "Possible", 
        5: "Equipoise", 
        6: "Incandescent"
      }
    },
    {
      id: 2,
      name: "Ruffian",
      img: "../../../public/E/A-horse2.jpg",
      pedigree: {
        1: "Reviewer", 
        2: "Shenanigans", 
        3: "Bold Ruler", 
        4: "Broadway", 
        5: "Native Dancer", 
        6: "Bold Irish"
      }
    },
    {
      id: 3,
      name: "Dante",
      img: "../../../public/E/A-horse3.jpg",
      pedigree: {
        1: "Nearco", 
        2: "Rosy Legend", 
        3: "Pharos", 
        4: "Nogara", 
        5: "Dark Legend", 
        6: "Rosy Cheeks"
      }
    },
    {
      id: 4,
      name: 'Storm Cat',
      img: "../../../public/E/A-horse4.jpg",
      pedigree: {
        1: "Storm Bird", 
        2: "Terlingua", 
        3: "Northern Dancer", 
        4: "South Occan", 
        5: "Secretariat", 
        6: "Crimson Saint"
      }
    },
    {
      id: 5,
      name: "Secretariat",
      img: "../../../public/E/A-horse5.jpg",
      pedigree: {
        1: "Bold Ruler", 
        2: "Somethingroyal", 
        3: "Nasrullah", 
        4: "Miss Disco", 
        5: "Prineequillo", 
        6: "Imperatrice"
      }
    },
    {
      id: 6,
      name: "Tom Fool",
      img: "../../../public/E/A-horse7.jpeg",
      pedigree: {
        1: "Nemow", 
        2: "Gaga", 
        3: "Pharamond", 
        4: "Aleibiades", 
        5: "Bull Dog", 
        6: "Alopise"
      }
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

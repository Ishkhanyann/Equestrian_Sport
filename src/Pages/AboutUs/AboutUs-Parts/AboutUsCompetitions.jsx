import React from "react";
import { useSelector } from "react-redux";
import "../AboutUs.scss";

export default function AboutUsCompetitions() {
  const competitionsData = useSelector((state) => state.competitions);

  return (
    <div className="AboutUs-Competitions">
      {competitionsData
        .filter((e) => e.id <= 2)
        .map((e) => {
          return (
            <div className={`competitionsContainer`} key={e.id}>
              <div className="aboutCompetitions">
                <h1>{e.name}</h1>
                <h1>{e.rank}</h1>
                <h2>{e.place}</h2>
                <h3>{e.discipline}</h3>
                <h4>{e.date}</h4>
              </div>
              <div className="competitionImg">
                <img src={e.img} alt="" />
              </div>
            </div>
          );
        })}
      {competitionsData
        .filter((e) => e.id > 2)
        .map((e) => {
          return (
            <div className={`competitionsContainer`} key={e.id}>
              <div className="competitionImg">
                <img src={e.img} alt="" />
              </div>
              <div className="aboutCompetitions">
                <h1>{e.name}</h1>
                <h1>{e.rank}</h1>
                <h2>{e.place}</h2>
                <h3>{e.discipline}</h3>
                <h4>{e.date}</h4>
              </div>
            </div>
          );
        })}
    </div>
  );
}

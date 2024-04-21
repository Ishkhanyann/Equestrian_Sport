import React from "react";
import { useSelector } from "react-redux";
import "../AboutUs.scss";

export default function AboutUsCompetitions() {
  const competitionsData = useSelector((state) => state.competitions);

  return (
    <div className="AboutUs-Competitions">
      {competitionsData.map((e) => {
        return (
          <div className="competitionsContainer" key={e.id}>
            <div className="aboutCompetitions">
              <h1>{e.place}</h1>
              <div className="cont">
                <span className="header">
                  <img src={e.logo} />
                  <p>{e.place}</p>
                </span>
                <span className="middle">
                  <p>{e.desc}</p>
                  <h1>{e.place}</h1>
                </span>
                <span className="footer">
                  <h3>{e.date}</h3>
                  <p>{e.arena}</p>
                </span>
              </div>
            <div className="teq1"></div>
            {/* <div className="teq2"></div> */}
            </div>
            <div className="competitionImg">
              <span>
                <img src={e.img} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

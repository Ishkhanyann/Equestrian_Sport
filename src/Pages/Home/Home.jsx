import React from "react";
import "./Home.scss";
import HomeMain from "./Home-Parts/HomeMain";
import HomeWCU from "./Home-Parts/HomeWCU";
import HomePiranha from "./Home-Parts/HomePiranha";

export default function Home() {
  return (
    <div className="Home">
      <HomeMain />
      <HomeWCU />
      <HomePiranha/>
    </div>
  );
}

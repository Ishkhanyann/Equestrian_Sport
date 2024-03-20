import React from "react";
import "./Home.scss";
import HomeMain from "./Home-Parts/HomeMain";
import HomeWCU from "./Home-Parts/HomeWCU";
import HomePiranha from "./Home-Parts/HomePiranha";
import HomeHistory from "./Home-Parts/HomeHistory";
import HomeHorses from "./Home-Parts/HomeHorses";
import HomeSlider from "./Home-Parts/HomeSlider";

export default function Home() {
  return (
    <div className="Home">
      <HomeMain />
      <HomeWCU />
      <HomePiranha/>
      <HomeHistory/>
      <HomeSlider/>
      <HomeHorses/>
    </div>
  );
}

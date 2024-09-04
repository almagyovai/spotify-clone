import React from "react";
import "../Assets/App.css";

import { TopbarContainer } from "../Containers/TopbarContainer.js";
import { MainContainer } from "../Containers/MainContainer.js";
import { RightMenuContainer } from "../Containers/RightMenuContainer.js";
import { LeftMenuContainer } from "../Containers/LeftMenuContainer.js";

function HomePage() {
  return (
    <div className="App">
      <TopbarContainer />
      <div className="flex-container">
        <LeftMenuContainer />
        <MainContainer />
        <RightMenuContainer />
      </div>

      <div className="background"></div>
    </div>
  );
}

export default HomePage;

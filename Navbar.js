import React from "react";
import Logo from "../Components/Logo.js";
import GoHomeButton from "./GoHomeButton.js";
import SearchBarComponent from "./SearchBarComponent.js";
import MyAccountComponents from "./MyAccountComponents.js";

const navbarContainer = {
  display: "flex",
  backgroundColor: "#666666",
  width: "100%",
  padding: "25px 30px",
};

const navbar = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};


function Navbar() {
  return (
    <div style={navbarContainer}>
      <div style={navbar}>
        <Logo />
        <GoHomeButton />
        <SearchBarComponent />
        <MyAccountComponents />
        <div>

    </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import Logo from "../Components/Logo.js";

const navbarContainer = { 
    display: "flex", 
    backgroundColor: "#666666",  
    width: "100%", 
    padding: "25px 30px"};

const navbar = { 
    display: "flex",
    flexDirection: "row"};

    
function Navbar() {
  return (
    <div style={navbarContainer}>
    <div style={navbar}>
        <Logo />
      <div className="searchBar">
        
      </div>
    </div>

    </div>
  );
}

export default Navbar;
import React from "react";
import { FaSpotify } from "react-icons/fa";

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
      <div className="logo" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch",
    alignContent: "stretch"}}>
        <i style={{fontSize: "30px", color: "#fff"}}>
          <FaSpotify />
        </i>
        <h2 style={{marginLeft: "0.75em", fontSize: "22px", color: "#fff"}}>Spotify</h2>
      </div>
      <div className="searchBar"></div>
    </div>

    </div>
  );
}

export default Navbar;
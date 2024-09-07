import React from 'react';
import { FaSpotify } from "react-icons/fa";

function Logo() {
  return (
    <div className="logo" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch",
        alignContent: "stretch"}}>
            <i style={{fontSize: "30px", color: "#fff"}}>
              <FaSpotify />
            </i>
            <h2 style={{marginLeft: "0.75em", fontSize: "22px", color: "#fff"}}>Spotify</h2>
          </div>
      )
}

export default Logo;
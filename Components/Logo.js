import React from "react";
import { FaSpotify } from "react-icons/fa";

function Logo() {
  return (
    <div
      className="logo"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "stretch",
        gap: "10px",
      }}
    >
      <i style={{ fontSize: "32px", color: "#fff" }}>
        <FaSpotify />
      </i>
      <h2 style={{ fontSize: "22px", color: "#fff" }}>Spotify</h2>
    </div>
  );
}

export default Logo;

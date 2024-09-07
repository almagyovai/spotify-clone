import React from 'react';
import { GoHome } from "react-icons/go";


function GoHomeButton() {
  return (
    <div
    style={{
      backgroundColor: "#999999",
      padding: "5px 9px 0 9px",
      borderRadius: "50px",
      marginLeft: "30em",
    }}
  >
    <i style={{ fontSize: "34px", color: "#fff" }}>
      <GoHome />
    </i>
  </div>
)
};

export default GoHomeButton;
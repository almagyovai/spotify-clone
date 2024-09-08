import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoHome, GoHomeFill } from "react-icons/go";
import styled from "styled-components";

const StyledInput = styled.input`
  &&::placeholder {
    color: #fff;
  }

  font-size: 16px;
  background-color: #666666;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 120px 10px 10px;
  outline: none;
  flex: 1;
`;

function SearchBarComponent({ isHomeActive, handleHomeClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
      <div style={{ backgroundColor: "#666666", padding: "5px 9px 0 9px", borderRadius: "50px", margin: "0" }}>
        <Link to="/HomePage">
          <i
            onClick={handleHomeClick}
            style={{ fontSize: "34px", color: "#fff", cursor: "pointer" }}
          >
            {isHomeActive ? <GoHomeFill /> : <GoHome />}
          </i>
        </Link>
      </div>

      <div
        className="searchBar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
          height: "45px",
          backgroundColor: "#666666",
          borderRadius: "50px",
          overflow: "hidden",
          gap: "5px",
        }}
      >
        <i style={{ fontSize: "30px", color: "#fff", padding: "5px 0px 0 8px" }}>
          <FiSearch />
        </i>
        <StyledInput type="text" autoComplete="on" placeholder="What do you want to play?" />
      </div>
    </div>
  );
}

export default SearchBarComponent;

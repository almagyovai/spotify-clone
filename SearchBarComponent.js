import React from 'react';
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";


const StyledInput = styled.input`
  &&::placeholder {
    color: #fff;
  }

  font-size: 16px;
  width: 100%;
`;


function SearchBarComponent() {
  return (
    <div
    className="searchBar"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: "45px",
      backgroundColor: "#999999",
      borderRadius: "50px",
      padding: "0 0 0 10px",
      marginLeft: "1em",
      overflow: "hidden",
    }}
  >
    <i
      style={{
        position: "relative",
        fontSize: "30px",
        color: "#fff",
        backgroundColor: "#999999",
        padding: "5px 4px 0 0",
        margin: "0",
      }}
    >
      <FiSearch />
    </i>
    <StyledInput
      type="text"
      autoComplete="on"
      placeholder="What do you want to play?"
      style={{
        padding: "20px 110px 20px 35px",
        backgroundColor: "#999999",
        color: "#fff",
        outline: "none",
        marginLeft: "-2em",
      }}
    />
  </div>
)
};

export default SearchBarComponent;


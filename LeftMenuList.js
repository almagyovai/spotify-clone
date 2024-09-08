import React from 'react';
import { IoAlbums } from "react-icons/io5";
import { IoRadio } from "react-icons/io5";
import { BiPulse } from "react-icons/bi";
import { FaPodcast } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";


function LeftMenuList() {
  return (
    <div>
      <IoAlbums />
      <IoRadio />
      <BiPulse />
      <FaPodcast />
      <FaMicrophone />
    </div>
  )
};

export default LeftMenuList;

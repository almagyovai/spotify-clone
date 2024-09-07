import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import Pfp from "../Assets/Images/default-pfp.jpg";
import Modal from "../Components/Modal.js";

const profilePicture = {
  width: "11%",
  clipPath: "circle(50% at 50% 50%)",
};

const buttonWrapper = {
  position: "relative",
  zIndex: "1",
};

function MyAccountComponents() {
  const [isOpen, SetisOpen] = useState(false);
  return (
    <div
      className="MyAccount"
      style={{ display: "flex", justifyContent: "end", gap: "25px" }}
    >
      <div className="button-wraper">
        <button
          onClick={() => SetisOpen(true)}
          style={{
            position: "relative",
            fontSize: "30px",
            backgroundColor: "#666666",
            color: "#fff",
            border: "none",
            boxShadow: "none",
            padding: "13px 4px 0 0",
            margin: "0",
          }}
        >
          <IoNotificationsOutline />
        </button>
      </div>
      <Modal open={isOpen}>Fancy Modal</Modal>
      <img src={Pfp} alt="profile-picture" style={profilePicture} />
    </div>
  );
}

export default MyAccountComponents;

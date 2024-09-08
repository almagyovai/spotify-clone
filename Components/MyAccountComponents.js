import React from "react";
import { IoNotificationsOutline, IoNotifications } from "react-icons/io5";
import Pfp from "../Assets/Images/default-pfp.jpg";

const profilePicture = {
  width: "50px",
  clipPath: "circle(50% at 50% 50%)",
};

function MyAccountComponents({ onOpenModal, onNotificationClick, isNotificationActive }) {
  return (
    <div
      className="MyAccount"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "25px",
      }}
    >
      <i
        onClick={onNotificationClick}
        style={{
          fontSize: "34px",
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          padding: "0",
          cursor: "pointer",
          margin: "0",
        }}
      >
        {isNotificationActive ? <IoNotifications /> : <IoNotificationsOutline />}
      </i>
      <button
        onClick={onOpenModal}
        style={{
          fontSize: "36px",
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          padding: "0",
          cursor: "pointer",
          margin: "0",
        }}
      >
        <img src={Pfp} alt="profile-picture" style={profilePicture} />
      </button>
    </div>
  );
}

export default MyAccountComponents;

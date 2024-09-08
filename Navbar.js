import React, { useState } from "react";
import Logo from "../Components/Logo.js";
import SearchBarComponent from "./SearchBarComponent.js";
import MyAccountComponents from "./MyAccountComponents.js";
import Modal from "./Modal.js";

const navbarContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#333333",
  width: "100%",
  padding: "5px 0px 0px 0px",
  position: "relative",
  zIndex: "1",
};

const navbar = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "370px",
};

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHomeActive, setHomeActive] = useState(true);
  const [isNotificationIconActive, setNotificationIconActive] = useState(false);

  const handleHomeClick = () => {
    setHomeActive(true);
    setNotificationIconActive(false);
  };

  const handleNotificationIconClick = () => {
    setNotificationIconActive(true);
    setHomeActive(false);
  };

  return (
    <div style={navbarContainer}>
      <div style={navbar}>
        <Logo />
        <SearchBarComponent 
          isHomeActive={isHomeActive} 
          handleHomeClick={handleHomeClick} 
        />
        <MyAccountComponents
          onOpenModal={() => setModalOpen(true)}
          onNotificationIconClick={handleNotificationIconClick}
          isNotificationIconActive={isNotificationIconActive}
        />
        {isModalOpen && (
          <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
            <div>
              <p style={{ margin: "0", padding: "10px 0" }}>Account</p>
              <p style={{ margin: "0", padding: "10px 0" }}>Profile</p>
              <p style={{ margin: "0", padding: "10px 0" }}>Settings</p>
              <p style={{ margin: "0", padding: "10px 0", borderTop: "1px solid #fff" }}>
                Logout
              </p>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Navbar;

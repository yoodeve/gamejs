import React, { useState } from "react";
import "../css/side-toggle.css";
import hbgBtn from "../image/hamburgerBtn.png";

const SideBar = ({ wid = 380, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log('1')
  };

  const closeMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="container" wid={wid}>
      <img onClick={()=>{toggleMenu()}} 
        className={!isOpen ? "show-btn" : "hide"}
        src={hbgBtn}
        alt=""
      />
      <div onMouseEnter={closeMenu} className={isOpen? "dimmer" : 'hide'}>{children}</div>
      <div className={isOpen ? "side-column" : "hide"}></div>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
import "../css/toggle.css";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownClicked = (e) => {
    setIsOpen(!isOpen);
  };

  const dropDownUnHovered = (e) => {
    setIsOpen(isOpen);
  };
  return (
    <div>
      <div
        className="divname"
        onMouseOver={() => {
          dropDownClicked();
        }}
        onMouseLeave={() => {
          dropDownUnHovered();
        }}
      >
        서비스
      </div>
      <ul className={`dropdownList ${isOpen ? "" : "hidden"}`}>
        <li className="list-tag">웹개발</li>
        <li className="list-tag">App 개발</li>
      </ul>
    </div>
  );
};

export default Service;

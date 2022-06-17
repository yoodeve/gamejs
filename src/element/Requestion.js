import React, { useState } from 'react';
import '../css/toggle.css'

const Requestion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownClicked = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='divname' onMouseOver={()=>{dropDownClicked()}}>문의 &amp; 의뢰</div>
      <ul className={`dropdownList ${isOpen ? '' : 'hidden'}`}>
        <li className='list-tag'>CEO 인사말</li>
        <li className='list-tag'>연혁</li>
        <li className='list-tag'>조직도</li>
      </ul>
    </div>
  );
};

export default Requestion;
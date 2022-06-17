import React, { useState } from 'react';
import '../css/toggle.css'

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownClicked = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='divname' onClick={()=>{dropDownClicked()}}>서비스</div>
      <ul className={`dropdownList ${isOpen ? '' : 'hidden'}`}>
        <li className='list-tag'>웹개발</li>
        <li className='list-tag'>App 개발</li>
      </ul>
    </div>
  );
};

export default Service;
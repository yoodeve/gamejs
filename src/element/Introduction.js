import React, { useState } from 'react';
import '../css/toggle.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownClicked = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='divname' onMouseOver={()=>{dropDownClicked()}}>회사 소개</div>
      <ul className={`dropdownList ${isOpen ? '' : 'hidden'}`}>
        <li className='list-tag'>CEO 인사말</li>
        <li className='list-tag'>연혁</li>
        <li className='list-tag'>조직도</li>
        <li className='list-tag'>CEO 인사말</li>
        <li className='list-tag'>CI 소개</li>
        <li className='list-tag'>찾아오시는 길</li>
      </ul>
    </div>
  );
};

export default Nav;
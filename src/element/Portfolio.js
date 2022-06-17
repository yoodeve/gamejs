import React, { useState } from 'react';
import '../css/toggle.css'

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownClicked = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='divname' onClick={()=>{dropDownClicked()}}>포트폴리오</div>
    </div>
  );
};

export default Portfolio;
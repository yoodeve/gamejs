import React, { useState } from "react";
import styled from "styled-components";
import Gradient from "../element/Gradient";

import "../css/toggle.css";

import "../css/main.css";

import logo from "../image/smallLogo.png";

import Navigation from "../component/Navigation";

const Main = (toggleMenu) => {
  const [backgrnd, setBackgrnd] = useState("back");

  return (
    <>
      {/* <SideBar /> */}

      <div className="main-wrap">
        <div className={backgrnd + " defaultback"}>
          <div className="top-grad" />
          <div className="logo-div" src={logo} />
          <Gradient
            position="absolute"
            margin="auto"
            bottom="0"
            height="296px"
            beginLinear="0%"
            endLinear="100%"
          />
        </div>
        <Navigation toggleMenu={toggleMenu} />
        <SloganWrap>
          <Slogan>
            <div className="big">마음마음마음 무라뭐라</div>
            <div className="small">어쩌구저쩌구뭐라무러ㅏㅇ라</div>
          </Slogan>
        </SloganWrap>
      </div>
    </>
  );
};

// const MainWrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   @media (max-width: 1024px) {
//     width: auto;
//     height: 100vh;
//   }
// `;

// const TopGrad = styled.div`
//   width: 100vw;
//   height: 296px;
//   /* position: absolute; */
//   /* top: 0; */
//   background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
// `;

// const LogoDiv = styled.div`
//   height: 38px;
//   width: 150px;
//   margin: 20px;
//   background-image: url("${(props) => props.src}");
//   z-index: 1;
//   position: absolute;
//   top: 0;
// `;

// const IMG = styled.img`
//   z-index: -1;
//   display: flex;
//   background-image: url("${(props) => props.src}");
//   /* width: 100vw; */
//   /* height: 100vh; */
//   position: fixed;
//   top: 0;
//   background-repeat: no-repeat;
// `;

// const NavWrapper = styled.div`
//   width: 100vw;
//   bottom: 0;
//   position: fixed;
// `;
const SloganWrap = styled.div`
display: flex;
`

const Slogan = styled.div`
margin: auto;
  color: #ffffff;
  position: relative;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  .big {
    font-size: 60px;
  }
  .small {
    font-size: 24px;
  }
`;

export default Main;

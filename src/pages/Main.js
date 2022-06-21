import React from "react";
import styled from "styled-components";
import Gradient from "../element/Gradient";

import back from "../image/back.png";
import logo from "../image/logo.png";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <>
      <MainWrap>
        <TopGrad>
          <LogoDiv src={logo} />
          <Navigation absolute />
        </TopGrad>

        <IMG src={back} />
        <Gradient
        position="absolute"
          margin="auto"
          bottom="0"
          height="296px"
          beginLinear="0%"
          endLinear="100%"
        />
      </MainWrap>
    </>
  );
};

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TopGrad = styled.div`
  width: 100vw;
  height: 296px;
  /* position: absolute; */
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

const LogoDiv = styled.div`
  height: 54px;
  width: 220.87px;
  margin: 30px;
  background-image: url("${(props) => props.src}");
  z-index: 1;
  position: absolute;
  top: 0;
`;

const IMG = styled.img`
  z-index: -1;
  display: flex;
  background-image: url("${(props) => props.src}");
  /* width: 100vw; */
  /* height: 100vh; */
  position: fixed;
  top: 0;
  background-repeat: no-repeat;
`;

const NavWrapper = styled.div`
  width: 100vw;
  bottom: 0;
  position: fixed;
`;

export default Main;

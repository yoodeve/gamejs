import React from "react";
import styled from "styled-components";
import Gradient from "../element/Gradient";

import back from "../image/back.png";
import logo from "../image/logo.png";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <>
      <Gradient
        transform="180"
        height="296px"
        top="0"
        beginLinear="0%"
        endLinear="100%"
      />
      <LogoDiv src={logo} />
      <Gradient bottom="0" height="296px" beginLinear="0%" endLinear="100%" />
      <IMG src={back} />
      <NavWrapper>
        <Navigation />
      </NavWrapper>
    </>
  );
};

const LogoDiv = styled.div`
  height: 54px;
  width: 220.87px;
  margin: 30px;
  background-image: url("${(props) => props.src}");
  z-index: 1;
  position: absolute;
`;

const IMG = styled.div`
  z-index: -1;
  display: flex;
  background-image: url("${(props) => props.src}");
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
`;

const NavWrapper = styled.div`
  width: 100vw;
  bottom: 0;
  position: fixed;
`;

export default Main;

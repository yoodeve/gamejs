import React from "react";
import styled from "styled-components";
import Gradient from "../element/Gradient";

import back from "../image/back.png";
import logo from "../image/logo.png";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <>
      <LogoDiv src={logo} />
      <Gradient />
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
`;

const IMG = styled.div`
  z-index: -1;
  display: flex;
  background-image: url("${(props) => props.src}");
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
`;

const NavWrapper = styled.div`
width: 100vw;
bottom: 0;
position: fixed;
`

export default Main;

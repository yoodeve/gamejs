import React from "react";
import styled from "styled-components";

import headerimg1 from "../image/HeaderImgOne.png";
import smallLogo from '../image/smallLogo.png';
import Gradient from "../element/Gradient";
import Navigation from "../pages/Navigation";

const Header = () => {
  return (
    <>
      <IMG height='420' src={headerimg1}>
        <Gradient
          height="100px"
          top="0"
          beginLinear="0%"
          endLinear="100%"><Navigation absolute /></Gradient>
        <IMG z='1' width='150' height='38' margin='20' src={smallLogo} absolute='absolute' />
        <Gradient margin='auto' height="100px" bottom="0" beginLinear="0%" endLinear="100%" />
      </IMG>
    </>
  );
};

const IMG = styled.div`
  z-index: ${(props) => (props.z ? `${props.z};` : "")};
  background-image: url("${(props) => props.src}");
  width: ${(props) => (props.width ? `${props.width}px;` : "100vw")};
  height: ${(props) => (props.height ? `${props.height}px;` : "100vw")};
  margin: ${(props) => (props.margin ? `${props.margin}px;` : "")};
  position: ${(props) => (props.absolute ? `${props.absolute};` : "")};
  top: 0;
  display: flex;
  flex-direction: column;
`;

export default Header;

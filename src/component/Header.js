import React from "react";
import styled from "styled-components";

import headerimg1 from "../image/HeaderImgOne.png";
import Gradient from "../element/Gradient";

const Header = () => {
  return (
    <>
      <Gradient
        transform="180"
        height="100px"
        top="0"
        beginLinear="0%"
        endLinear="100%"
      />
      <IMG src={headerimg1}>
      <Gradient
        height="100px"
        bottom="0"
        beginLinear="0%"
        endLinear="100%"
      />
      </IMG>
    </>
  );
};

const IMG = styled.div`
  z-index: -1;
  background-image: url("${(props) => props.src}");
  width: 100%;
  height: 419px;
  position: fixed;
  top: 0;
`;

export default Header;

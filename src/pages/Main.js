import React from "react";
import styled from "styled-components";
import { Navi } from "../element/Nav";
import Gradient from "../element/Gradient";
import back from "../image/back.png";

const Main = () => {
  return (
    <>
      <IMG src={back} />
      <Gradient />
      <Navi />
    </>
  );
};
const IMG = styled.img`
  width: 100vw;
  z-index: -1;
`;

export default Main;

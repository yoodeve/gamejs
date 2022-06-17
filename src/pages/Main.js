import React from "react";
import styled from "styled-components";
import Gradient from "../element/Gradient";
import Introduction from "../element/Introduction";
import Service from "../element/Service";
import Portfolio from "../element/Portfolio";
import Requestion from "../element/Requestion";
import Hire from "../element/Hire";
import back from "../image/back.png";

const Main = () => {
  return (
    <>
      <Gradient />
      <IMG src={back} />
      <InDiv />
      <Flex>
        <Introduction />
        <Service />
        <Portfolio />
        <Requestion />
        <Hire />
      </Flex>
    </>
  );
};
const IMG = styled.div`
  z-index: -1;
  display: flex;
  background-image: url("${(props) => props.src}");
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
`;

const InDiv = styled.div`
  margin: 0 auto;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Flex = styled.div`
position: fixed;
bottom: 0;
left: 296px;
display: flex;
align-items: center;
`

export default Main;

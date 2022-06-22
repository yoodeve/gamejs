import React from "react";
import styled from "styled-components";

const Body = ({ children }) => {
  return <Flex>{children}</Flex>;
};

const Flex = styled.div`
  justify-content: center;
  display: flex;
  background-color: #fff;
  margin-top: 20vh;
`;

export default Body;

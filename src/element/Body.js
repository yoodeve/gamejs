import React from "react";
import styled from "styled-components";

const Body = (props) => {
const {margint, children} = props;

const styles = {margint,};

  return <Flex {...styles}>{children}</Flex>;
};

const Flex = styled.div`
  justify-content: center;
  display: flex;
  background-color: #fff;
  /* margin-top: 20vh */
  ${(props)=>props.margint? `margin-top: ${props.margint};` : 'margin-top:20vh'}
`;

export default Body;

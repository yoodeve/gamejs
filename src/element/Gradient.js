import React from "react";
import styled from "styled-components";

const Gradient = (props) => {
  const {
    beginLinear,
    endLinear,
    top,
    bottom,
    transform,
    width,
    height,
    children,
    margin,
    position,
  } = props;

  const styles = {
    beginLinear,
    endLinear,
    top,
    bottom,
    transform,
    width,
    height,
    margin,
    position,
  };

  return (
    <>
      <Grad {...styles}>{children}</Grad>
    </>
  );
};

const Grad = styled.div`
  position: ${(props) => (props.position ? `${props.position};` : "")};
  margin-top: ${(props) => (props.margin ? `${props.margin};` : "")};
  bottom: ${(props) => (props.bottom ? `${props.bottom};` : "")};
  top: ${(props) => (props.top ? `${props.top};` : "")};
  width: ${(props) => (props.width ? `${props.width}px;` : "100vw")};
  height: ${(props) => (props.height ? `${props.height};` : "")};
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) ${(props) => props.beginLinear},
    #000000 ${(props) => props.endLinear}
  );
  transform: ${(props) =>
    props.transform ? `rotate(${props.transform}deg);` : ""};
`;

export default Gradient;

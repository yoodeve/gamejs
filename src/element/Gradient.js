import React from "react";
import styled from "styled-components";

const Gradient = () => {
  return (
    <div>
      <Grad />
    </div>
  );
};

const Grad = styled.div`
margin: 0;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 296px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

export default Gradient;

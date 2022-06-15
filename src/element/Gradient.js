import React from 'react';
import styled from "styled-components";

const Gradient = () => {
    return (
        <div>
            <Grad />
        </div>
    );
};

const Grad = styled.div`
  width: 100vw;
  height: 296px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  z-index: 1;
`;

export default Gradient;
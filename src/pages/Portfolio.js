import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Body from "../element/Body";
import Footer from "../element/Footer";

import tiki from "../image/TKTK.png";
import dn1 from "../image/DN1.png";
import dn2 from "../image/DN2.png";
import sample from '../image/sample.png';

const Portfolio = () => {
  return (
    <>
      <Header />
      <Body>
        <ImgDiv>
          <EachDiv>
            <img className="port-image" src={sample} alt="" />
            <p className="caption">TIKI TAKA</p>
          </EachDiv>
          <EachDiv>
            <img className="port-image" src={sample} alt="" />
            <p className="caption">피파대낙.com</p>
          </EachDiv>
          <EachDiv>
            <img className="port-image" src={sample} alt="" />
            <p className="caption">피파대낙.com</p>
          </EachDiv>
        </ImgDiv>
      </Body>
      <Footer />
    </>
  );
};

const ImgDiv = styled.div`
  display: flex;
`;

const EachDiv = styled.div`
.caption {
    margin: 0 0 0 10px;
    font-size: 1.5rem;
    font-family: scMed;
}
`;

export default Portfolio;

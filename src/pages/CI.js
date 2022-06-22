import React from "react";
import Header from "../component/Header";
import Footer from "../element/Footer";

import bnwlogo from "../image/BnwLogo.png";
import collogo from "../image/colorLogo.png";
import panone from '../image/PanOne.png';
import pantwo from '../image/PanTwo.png';
import panthr from '../image/PanThr.png';
import subcol from '../image/SubCol.png';

import styled from "styled-components";

const CI = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Wrap>
          <H3>CI 소개</H3>
          <H4>Corporate Logo</H4>
          <Display>
            <Image src={bnwlogo}></Image>
          </Display>
          <H4>단색형</H4>
          <Display>
            <Image src={collogo}></Image>
          </Display>
          <H3>컬러 시스템</H3>
          <H4> - Main Color</H4>
          <Pantone>
            <img src={panone} />
            <img src={pantwo} />
            <img src={panthr} />
          </Pantone>
          <H4> - Sub Color</H4>
          <Pantone>
            <img src={subcol} />
          </Pantone>
        </Wrap>
      </Flex>
      <Footer />
    </div>
  );
};

const Flex = styled.div`
  justify-content: center;
  display: flex;
  background-color: #fff;
  margin-top: 10vh;
`;

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const H4 = styled.p`
  /* margin: 0 auto; */
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  margin-left: 40px;
`;

const Image = styled.img`
  margin: 0 auto;
  padding: 30px;
`;

const Display = styled.div`
  display: flex;
`;

const H3 = styled.p`
  /* margin: 0 auto; */
  text-align: left;
  font-size: 30px;
  font-weight: 700;
`;

const Pantone = styled.div`
display: flex;
justify-content: space-between;
padding: 0 0 30px 0;
`

export default CI;

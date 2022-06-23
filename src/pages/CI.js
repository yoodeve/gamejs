import React from "react";
import Header from "../component/Header";
import Footer from "../element/Footer";

import bnwlogo from "../image/BnwLogo.png";
import collogo from "../image/colorLogo.png";
import blueone from "../image/blueOne.png";
import bluetwo from "../image/blueTwo.png";
import black from "../image/Black.png";

import styled from "styled-components";

const CI = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Wrap>
          <H3>CI 소개</H3>
          <PBody>
            게임인스의 CI는 IT 웹 개발 전문 기업으로서<br />  전문성과 도전정신을
            표현하였습니다.<br /> <br />
            곡선과 직선을 결합해 부드러움과 힘 있게 뻗어나가는
            로고 타입를 통해 IT기업으로<br /> 성장하는 기업의 현재와 미래를
            나타내었습니다. 또한 틀에 박혀있지 않고, 자유로움과 힘 있는<br /> 이미지를
            전달하는 Blue 색상과 Black 색상을 통해 힘 있게 뻗어나갈 수 있는
            기업임을 표현하였습니다.
          </PBody>
          <H4>Corporate Logo</H4>
          <Display>
            <Image src={collogo}></Image>
          </Display>
          <H4>단색형</H4>
          <Display>
            <Image src={bnwlogo}></Image>
          </Display>
          <H3>컬러 시스템</H3>
          <H4> - Main Color</H4>
          <Pantone>
            <img src={blueone} />
            <img src={bluetwo} />
          </Pantone>
          <H4> - Sub Color</H4>
          <Pantone>
            <img src={black} />
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
  width: 1100px;
  margin: 0 auto;
`;

const H3 = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;

const PBody = styled.p`
text-align: center;
`

const H4 = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding-top: 20px;
`;

const Image = styled.img`
  margin: 0 auto;
  padding: 30px;
`;

const Display = styled.div`
  display: flex;
`;

const Pantone = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 30px 0;
`;

export default CI;

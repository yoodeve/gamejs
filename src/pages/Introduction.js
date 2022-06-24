import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Body from "../element/Body";
import Footer from "../element/Footer";
import baseball from "../image/BaseballDome.png";
import dev from "../image/Develop.png";
import ui from "../image/UI.png";

const Introduction = () => {
  return (
    <div>
      <Header />

      <Body>
        <Wrap>
          <Paragraph>
            <p className="div-bold">
              gameins do these things and this company is great
            </p>
            Nullam mollis molestie justo, ac interdum ex iaculis et. Mauris quis
            <br />
            purus in tortor cursus aliquet ut a ipsum. Sed pretium purus vitae
            <br />
            neque sollicitudin, vitae gravida justo tristique. Aliquam luctus
            <br />
            quam nec arcu maximus, ut pulvinar lorem mollis. Cras id justo
            <br />
            metus. Integer vitae nisl et ante suscipit tincidunt id rhoncus
            <br />
            tellus. Curabitur non ligula eget augue mollis vestibulum.
            <br />
          </Paragraph>
        </Wrap>
      </Body>
      <Section src={baseball} />
      <SemiBlack />
      <Body>
        <Paragraph>
          <p className="div-bold">SERVICE</p>
          Nullam mollis molestie justo, ac interdum ex iaculis et. Mauris quis
          <br />
          purus in tortor cursus aliquet ut a ipsum. Sed pretium purus vitae
          <br />
          neque sollicitudin, vitae gravida justo tristique. Aliquam luctus
        </Paragraph>
      </Body>
      <Body margint="2vh">
        <div>
          <Circle src={dev} />
          <Paragraph>
            <p className="div-bold">웹 서비스 개발</p>웹 기반 서비스에서
            웹사이트, 플랫폼, 커뮤니티 모든 형태의 서비스 개발
          </Paragraph>
        </div>
        <div>
          <Circle src={ui} />
          <Paragraph>
            <p className="div-bold">UI/UX 디자인</p>
            브랜드 가치를 높일 수 있는 모던 UI/UX 개발
          </Paragraph>
        </div>
      </Body>

      <Footer />
    </div>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
`;
const SemiBlack =styled.div`
background-color: #000;
opacity: 0.1;
`

const Section = styled.img`
  width: 100vw;
  height: auto;
  filter:brightness(50%);
  opacity: 0.9;
`;

const Paragraph = styled.p`
  .div-bold {
    font-family: ibmSemiB;
  }
  text-align: center;
  padding-bottom: 10vh;
`;

const Circle = styled.img`
height: auto;
  margin: 5vw;
`;

export default Introduction;

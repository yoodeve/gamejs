import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Body from "../element/Body";
import Footer from "../element/Footer";
import baseball from "../image/BaseballDome.png";

const Introduction = () => {
  return (
    <div>
      <Header />
      <Body>
        <Wrap>
          <Paragraph>
            <div className="div-bold">
              gameins do these things and this company is great
            </div>
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
      <img src={baseball} />
      <Body>
        <Paragraph>
            <div className="div-bold">
                SERVICE
            </div>
            Nullam mollis molestie justo, ac interdum ex iaculis et. Mauris quis
            <br />
            purus in tortor cursus aliquet ut a ipsum. Sed pretium purus vitae
            <br />
            neque sollicitudin, vitae gravida justo tristique. Aliquam luctus
        </Paragraph>
      </Body>
      <Body>
        
      </Body>
      <Footer />
    </div>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
`;

const Paragraph = styled.p`
  .div-bold {
    font-family: ibmSemiB;
  }
  text-align: center;
  padding-bottom: 10vh;
`;

export default Introduction;

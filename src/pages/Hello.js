import React from "react";
import styled from "styled-components";

import Header from "../component/Header";
import Body from "../element/Body";
import Footer from "../element/Footer";
import greetingImg from "../image/GreetingImg.png";
import introImg from "../image/SloganImg.png";

const Hello = () => {
  return (
    <>
      <Header />
      <Body>
        <PWrapper>
          <PBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            aliquam est sit amet malesuada mollis. Cras id orci vitae risus
            pretium ullamcorper. Etiam ut tellus vehicula, consectetur nisl non,
            rhoncus leo. Pellentesque lobortis lorem vitae egestas interdum.
            Duis vel lectus sit amet lorem laoreet lobortis. Nullam mollis
            molestie justo, ac interdum ex iaculis et. Mauris quis purus in
            tortor cursus aliquet ut a ipsum. Sed pretium purus vitae neque
            sollicitudin, vitae gravida justo tristique. Aliquam luctus quam nec
            arcu maximus, ut pulvinar lorem mollis. Cras id justo metus. Integer
            vitae nisl et ante suscipit tincidunt id rhoncus tellus. Curabitur
            non ligula eget augue mollis vestibulum. Sed elementum nulla id
            venenatis fermentum. Vivamus quis purus at mi fermentum suscipit
            congue rhoncus eros. Phasellus pretium urna erat, vestibulum iaculis
            quam consectetur at. Praesent quis vestibulum urna. Nam convallis
            fermentum quam, a consequat turpis porta ut. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Curabitur ullamcorper quis urna non rutrum. Donec elit ipsum, luctus
            sit amet vulputate quis, tristique id mauris. Nullam ultrices arcu
            id magna maximus aliquam. Nunc iaculis augue leo. Mauris
            pellentesque eros sit amet erat iaculis, nec aliquet nisi porta.
            Aenean libero arcu, hendrerit et magna quis, pharetra feugiat
            tortor. Nunc vehicula in odio eget iaculis. Duis a enim orci. Nulla
            luctus lorem convallis augue aliquam efficitur. Quisque dapibus,
            metus vel tristique porta, diam odio tempus quam, at elementum massa
            purus ac urna. Vivamus tempus id erat a vehicula. Praesent tincidunt
            enim a sem placerat, ut auctor lacus sollicitudin. Aenean in lorem
            quis nisl vestibulum bibendum sed nec lorem. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </PBody>
        </PWrapper>
        <CEOImg src={introImg} />
      </Body>
      <img src={greetingImg} />
      <Footer />
    </>
  );
};

const CEOImg = styled.img``;

const PWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PBody = styled.p`
  width: 25vw;
`;

// greeting:building
//intro:empty box

export default Hello;

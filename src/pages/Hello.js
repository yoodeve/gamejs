import React from "react";
import styled from "styled-components";

import Header from "../component/Header";
import Footer from "../element/Footer";
import introImg from "../image/SloganImg.png";
import building from "../image/GreetingImg.png";

const Hello = () => {
  return (
    <>
      <Header />
      <PWrapper src={building}>
        <BuildingImg>
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
          <CEOImg src={introImg} />
        </BuildingImg>
      </PWrapper>
      <Footer />
    </>
  );
};

const PWrapper = styled.div`
  background-image: url("${(props) => props.src}");
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 10vh;
`;
const PBody = styled.p`
  width: 35vw;
  margin-right: 40px;
`;
const CEOImg = styled.img`
  margin-left: 40px;
`;

const BuildingImg = styled.div`
  /* width: 100vw; */

  display: flex;
  justify-content: center;
  margin-top: auto;
`;


export default Hello;

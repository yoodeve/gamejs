import React from "react";
import styled from "styled-components";

import headerimg1 from "../image/HeaderImgOne.png";
import smallLogo from "../image/smallLogo.png";
import Gradient from "../element/Gradient";
import Navigation from "../pages/Navigation";

const Header = () => {
  return (
    <>
      <IMG height="420" src={headerimg1}>
        <TopGrad>
          <Navigation absolute />
        </TopGrad>
        <IMG
          z="1"
          width="150"
          height="38"
          margin="20"
          src={smallLogo}
          absolute="absolute"
        />
        <Gradient
          margin="auto"
          height="100px"
          bottom="0"
          beginLinear="0%"
          endLinear="100%"
        >
          <ListParent>
            <List>CEO 인삿말</List>
            <List>연혁</List>
            <List>조직도</List>
            <List>CI 소개</List>
            <List>찾아오시는 길</List>
          </ListParent>
        </Gradient>
      </IMG>
    </>
  );
};

const IMG = styled.div`
  z-index: ${(props) => (props.z ? `${props.z};` : "")};
  background-image: url("${(props) => props.src}");
  width: ${(props) => (props.width ? `${props.width}px;` : "100vw")};
  height: ${(props) => (props.height ? `${props.height}px;` : "100vw")};
  margin: ${(props) => (props.margin ? `${props.margin}px;` : "")};
  position: ${(props) => (props.absolute ? `${props.absolute};` : "")};
  top: 0;
  display: flex;
  flex-direction: column;
`;

const TopGrad = styled.div`
width: 100vw;
height: 100px;
position: absolute;
top:0;
background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%); ;
`

const ListParent = styled.ul`
color: #fff;
list-style: none;
display: inline-flex;
line-height: 100px;
`

const List = styled.li`
margin: 0 20px;
`

export default Header;

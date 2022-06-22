import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import headerimg1 from "../image/HeaderImgOne.png";
import smallLogo from "../image/smallLogo.png";
import Gradient from "../element/Gradient";
import Navigation from "../pages/Navigation";

const Header = () => {
  const router = useSelector((state) => state.router.location.pathname);
  console.log(router); //intro/xxx
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
          <ListWrap>
            <ListParent>
              {router === "/intro/greeting" ? (
                <List onClick={() => window.location.pathname = "/intro/greeting"}>
                  CEO 인삿말
                </List>
              ) : (
                <ListNone onClick={() => window.location.pathname = "/intro/greeting"}>CEO 인삿말</ListNone>
              )}
              {router === "/intro/history" ? (
                <List onClick={() => window.location.pathname = "/intro/history"}>연혁</List>
              ) : (
                <ListNone onClick={() => window.location.pathname = "/intro/history"}>연혁</ListNone>
              )}
              {router === "/intro/officetree" ? (
                <List onClick={() => window.location.pathname = "/intro/officetree"}>
                  조직도
                </List>
              ) : (
                <ListNone onClick={() => window.location.pathname = "/intro/officetree"}>조직도</ListNone>
              )}
              {router === "/intro/CIintro" ? (
                <List onClick={() => window.location.pathname = "/intro/CIintro"}>
                  CI 소개
                </List>
              ) : (
                <ListNone onClick={() => window.location.pathname = "/intro/CIintro"}>CI 소개</ListNone>
              )}
              {router === "/intro/map" ? (
                <List onClick={() => window.location.pathname = "/intro/map"}>
                  찾아오시는 길
                </List>
              ) : (
                <ListNone onClick={() => window.location.pathname = "/intro/map"}>찾아오시는 길</ListNone>
              )}
            </ListParent>
          </ListWrap>
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
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%); ;
`;

const ListParent = styled.ul`
  color: #fff;
  list-style: none;
  display: inline-flex;
  /* line-height: 100px; */
  padding: 0 800px 0 0;
`;

const List = styled.li`
  padding: 0px 20px 10px 20px;
  margin: 0px 20px;
  padding-top: 50px;
  border-bottom: 4px solid #3180f1;
`;

const ListNone = styled.li`
  padding: 0px 20px 10px 20px;
  margin: 0px 20px;
  padding-top: 50px;
  cursor: pointer;
`;

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Header;

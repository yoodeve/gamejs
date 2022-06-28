import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import headerimg1 from "../image/HeaderImgOne.png";
import portwall from "../image/PortWall.png";
import smallLogo from "../image/smallLogo.png";
import Gradient from "../element/Gradient";
import Navigation from "./Navigation";

const Header = () => {
  const router = useSelector((state) => state.router.location.pathname);
  return (
    <>
      <IMG
        height="420"
        src={
          router.includes("/intro")
            ? headerimg1
            : router === "/portfolio"
            ? portwall
            : ""
        }
      >
        <TopGrad>
          <Navigation />
        </TopGrad>
        <IMG
          onClick={() => {
            window.location.pathname = "/";
          }}
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
          <ListWrap router={router}>
            <ListParent>
              {router === "/intro" ? (
                <List onClick={() => (window.location.pathname = "/intro")}>
                  회사소개
                </List>
              ) : (
                <ListNone onClick={() => (window.location.pathname = "/intro")}>
                  회사소개
                </ListNone>
              )}
              {router === "/intro/greeting" ? (
                <List
                  onClick={() => (window.location.pathname = "/intro/greeting")}
                >
                  CEO 인사말
                </List>
              ) : (
                <ListNone
                  onClick={() => (window.location.pathname = "/intro/greeting")}
                >
                  CEO 인사말
                </ListNone>
              )}
              {router === "/intro/history" ? (
                <List
                  onClick={() => (window.location.pathname = "/intro/history")}
                >
                  연혁
                </List>
              ) : (
                <ListNone
                  onClick={() => (window.location.pathname = "/intro/history")}
                >
                  연혁
                </ListNone>
              )}
              {router === "/intro/officetree" ? (
                <List
                  onClick={() =>
                    (window.location.pathname = "/intro/officetree")
                  }
                >
                  조직도
                </List>
              ) : (
                <ListNone
                  onClick={() =>
                    (window.location.pathname = "/intro/officetree")
                  }
                >
                  조직도
                </ListNone>
              )}
              {router === "/intro/CIintro" ? (
                <List
                  onClick={() => (window.location.pathname = "/intro/CIintro")}
                >
                  CI 소개
                </List>
              ) : (
                <ListNone
                  onClick={() => (window.location.pathname = "/intro/CIintro")}
                >
                  CI 소개
                </ListNone>
              )}
              {router === "/intro/map" ? (
                <List onClick={() => (window.location.pathname = "/intro/map")}>
                  찾아오시는 길
                </List>
              ) : (
                <ListNone
                  onClick={() => (window.location.pathname = "/intro/map")}
                >
                  찾아오시는 길
                </ListNone>
              )}
            </ListParent>
          </ListWrap>
        </Gradient>
      </IMG>
    </>
  );
};

const IMG = styled.div`
background-position: center;
  cursor: pointer;
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
  background: linear-gradient(0deg, rgba(ㄹ0, 0, 0, 0) 0%, #000000 100%);
`;

const ListParent = styled.ul`
  color: #fff;
  list-style: none;
  display: inline-flex;
  /* line-height: 100px; */
  padding: 47px 350px 0 0;
`;

const List = styled.li`
  padding: 0px 20px;
  margin: 0px 16px;
  /* padding-top: 50px; */
  border-bottom: 4px solid #3180f1;
  font-family: scB;
  font-size: 1.2rem;
`;

const ListNone = styled.li`
  padding: 0px 20px 10px 20px;
  margin: 0px 20px;
  /* padding-top: 50px; */
  cursor: pointer;
  font-family: scB;
  font-size: 1.2rem;
`;

const ListWrap = styled.div`
  /* 라우트 조건 추가 자리 */
  ${(props) => {
    return props.router.includes("intro") ? `display:flex;` : `display:none;`;
  }}
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Header;

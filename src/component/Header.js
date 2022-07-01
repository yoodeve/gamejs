import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import headerimg1 from "../image/HeaderImgOne.png";
import portwall from "../image/PortWall.png";
import smallLogo from "../image/smallLogo.png";
import reqdetail from '../image/ReqDetailWall.png'
import hiredetail from '../image/HireDetWall.png'


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
            : router === "/request"
            ? hiredetail
            : router === '/staff'
            ? reqdetail
            : ''
        }
      >
        <TxtBox>
          {router.includes("/intro") ? (
            <Flex>
              <Txt>P&nbsp;O&nbsp;R&nbsp;T&nbsp;F&nbsp;O&nbsp;L&nbsp;I&nbsp;O</Txt>
              <SmallTxt>게임인스의 현재 진행한 작업물 입니다.</SmallTxt>
            </Flex>
          ) : router === "/portfolio" ? (
            <Flex>
              <Txt>P O R T</Txt>
              <SmallTxt>게임인스의 현재 진행한 작업물 입니다.</SmallTxt>
            </Flex>
          ) : router === "/request" ? (
            <Flex>
              <Txt>문&nbsp;의&nbsp;&amp;&nbsp;의&nbsp;뢰</Txt>
              <SmallTxt>게임인스에게 맡겨보세요.</SmallTxt>
            </Flex>
          ) : (
            <Flex>
              <Txt>채&nbsp;용&nbsp;정&nbsp;보</Txt>
              <SmallTxt>
                사람과 감동으로 게임인스를<br /> 키워갈 인재를 기다립니다.
              </SmallTxt>
            </Flex>
          )}

          <TopGrad>
            <Navigation />
          </TopGrad>
          <Logo
            onClick={() => (window.location.pathname = "/")}
            src={smallLogo}
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
                  <ListNone
                    onClick={() => (window.location.pathname = "/intro")}
                  >
                    회사소개
                  </ListNone>
                )}
                {router === "/intro/greeting" ? (
                  <List
                    onClick={() =>
                      (window.location.pathname = "/intro/greeting")
                    }
                  >
                    CEO 인사말
                  </List>
                ) : (
                  <ListNone
                    onClick={() =>
                      (window.location.pathname = "/intro/greeting")
                    }
                  >
                    CEO 인사말
                  </ListNone>
                )}
                {router === "/intro/history" ? (
                  <List
                    onClick={() =>
                      (window.location.pathname = "/intro/history")
                    }
                  >
                    연혁
                  </List>
                ) : (
                  <ListNone
                    onClick={() =>
                      (window.location.pathname = "/intro/history")
                    }
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
                    onClick={() =>
                      (window.location.pathname = "/intro/CIintro")
                    }
                  >
                    CI 소개
                  </List>
                ) : (
                  <ListNone
                    onClick={() =>
                      (window.location.pathname = "/intro/CIintro")
                    }
                  >
                    CI 소개
                  </ListNone>
                )}
                {router === "/intro/map" ? (
                  <List
                    onClick={() => (window.location.pathname = "/intro/map")}
                  >
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
        </TxtBox>
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
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const TxtBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  font-family: scMed;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Flex = styled.div`
  display: grid;
`;

const Txt = styled.p`
  font-size: 40px;
  text-align: center;
  padding: 0;
  margin: 5px;
  color: #fff;
`;

const SmallTxt = styled.p`
  font-size: 26px;
  text-align: center;
  padding: 0;
  margin: 5px;
  color: #fff;
  font-weight: 400;
`;

const TopGrad = styled.div`
  width: 100vw;
  height: 100px;
  position: absolute;
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
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
  font-family: scReg;
  font-size: 1rem;
  font-family: scB;
`;

const ListNone = styled.li`
  padding: 0px 20px 10px 20px;
  margin: 0px 20px;
  /* padding-top: 50px; */
  cursor: pointer;
  font-family: scReg;
  font-size: 0.9rem;
  &:hover {
    font-family: scB;
  }
`;

const ListWrap = styled.div`
  /* 라우트 조건 추가 자리 */
  ${(props) => {
    return props.router.includes("intro") ? `display:flex;` : `display:none;`;
  }}
  margin: 0 0 0 200px;
  position: absolute;
  bottom: 0;
`;

const Gradient = styled.div`
  position: absolute;
  margin-top: auto;
  bottom: 0;
  width: 100vw;
  height: 100px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

export default Header;

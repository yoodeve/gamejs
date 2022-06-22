import React, { useState } from "react";
import Dropdown from "../element/Dropdown";
import "../css/toggle.css";
import styled from "styled-components";

const Navigation = (props) => {
  const { absolute } = props;

  const styles = {
    absolute,
  };

  const [dropIntro, setDropIntro] = useState(false);
  const [dropServ, setDropServe] = useState(false);
  const [dropPort, setDropPort] = useState(false);
  const [dropReq, setDropReq] = useState(false);
  const [dropHire, setDropHire] = useState(false);

  return (
    <Wrap {...styles}>
      <div className="main-nav-display">
        <div className="mainNavAuto">
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropIntro(!dropIntro);
            }}
            onMouseLeave={() => {
              setDropIntro(!dropIntro);
            }}
          >
            <div className="for-hover">회사 소개</div>
            <Dropdown drop={dropIntro}>
              <ul>
                {/* <li className="list-head">회사 소개</li> */}
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/greeting";
                  }}
                >
                  CEO 인사말
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/history";
                  }}
                >
                  연혁
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/officetree";
                  }}
                >
                  조직도
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/CIintro";
                  }}
                >
                  CI 소개
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/map";
                  }}
                >
                  찾아오시는 길
                </li>
              </ul>
            </Dropdown>
          </div>

          <div
            className="mainNavTxt"
            onMouseEnter={() => setDropServe(!dropServ)}
            onMouseLeave={() => setDropServe(!dropServ)}
          >
            <div className="for-hover">서비스</div>
            <Dropdown drop={dropServ}>
              <ul>
                <li className="list-head">서비스</li>
                <li>웹개발</li>
                <li>App 개발</li>
              </ul>
            </Dropdown>
          </div>

          <div
            className="mainNavTxt"
            onMouseEnter={() => setDropPort(!dropPort)}
            onMouseLeave={() => setDropPort(!dropPort)}
          >
            <div className="for-hover">포트폴리오</div>
            <Dropdown drop={dropPort}>
              <ul>
                <li className="list-head">포트폴리오</li>
                <li>포트폴리오</li>
              </ul>
            </Dropdown>
          </div>
          <div
            className="mainNavTxt"
            onMouseEnter={() => setDropReq(!dropReq)}
            onMouseLeave={() => setDropReq(!dropReq)}
          >
            <div className="for-hover">문의 &amp; 의뢰</div>
            <Dropdown drop={dropReq}>
              <ul>
                <li className="list-head">문의 &amp; 의뢰</li>
                <li>CEO 인사말</li>
                <li>연혁</li>
                <li>조직도</li>
              </ul>
            </Dropdown>
          </div>
          <div
            className="mainNavTxt"
            onMouseEnter={() => setDropHire(!dropHire)}
            onMouseLeave={() => setDropHire(!dropHire)}
          >
            <div className="for-hover">인재 채용</div>
            <Dropdown drop={dropHire}>
              <ul>
                <li className="list-head">인재 채용</li>
                <li>CEO 인사말</li>
                <li>연혁</li>
                <li>조직도</li>
                <li>CEO 인사말</li>
                <li>CI 소개</li>
                <li>찾아오시는 길</li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  ${(props) => (props.absolute ? `justify-content:center;` : "")}
  
`;

export default Navigation;

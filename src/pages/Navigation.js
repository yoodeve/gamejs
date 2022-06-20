import React, { useState } from "react";
import Dropdown from "../element/Dropdown";
import "../css/toggle.css";

const Navigation = () => {
  const [dropIntro, setDropIntro] = useState(false);
  const [dropServ, setDropServe] = useState(false);
  const [dropPort, setDropPort] = useState(false);
  const [dropReq, setDropReq] = useState(false);
  const [dropHire, setDropHire] = useState(false);

  return (
    <div className="main-nav-display">
      <div className="mainNavAuto">
        <div className="mainNavTxt" onClick={() => setDropIntro(!dropIntro)}>
          <div>회사 소개</div>
          <Dropdown drop={dropIntro}>
            <ul>
              <li>CEO 인사말</li>
              <li>연혁</li>
              <li>조직도</li>
              <li>CI 소개</li>
              <li>찾아오시는 길</li>
            </ul>
          </Dropdown>
        </div>

        <div className="mainNavTxt" onMouseOver={() => setDropServe(!dropServ)}>
          서비스
          <Dropdown drop={dropServ}>
            <ul>
              <li>웹개발</li>
              <li>App 개발</li>
            </ul>
          </Dropdown>
        </div>

        <div
          className="mainNavTxt"
          onMouseOver={() => setDropPort(!dropPort)}
        //   onMouseOut={() => setDropPort(!dropPort)}
        >
          포트폴리오
          <Dropdown drop={dropPort}>
            <ul>
              <li>포트폴리오</li>
            </ul>
          </Dropdown>
        </div>
        <div
          className="mainNavTxt"
          onMouseOver={() => setDropReq(!dropReq)}
        //   onMouseOut={() => setDropReq(!dropReq)}
        >
          문의 &amp; 의뢰
          <Dropdown drop={dropReq}>
            <ul>
              <li>CEO 인사말</li>
              <li>연혁</li>
              <li>조직도</li>
            </ul>
          </Dropdown>
        </div>
        <div
          className="mainNavTxt"
          onMouseOver={() => setDropHire(!dropHire)}
          onMouseLeave={() => setDropHire(!dropHire)}
        >
          인재 채용
          <Dropdown drop={dropHire}>
            <ul>
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
  );
};

export default Navigation;

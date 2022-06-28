import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dropdown from "../element/Dropdown";
import "../css/toggle.css";
// import back from "../image/back.png";

// import intro from "../image/IntroWall.png";
// import port from "../image/PortWall.png";
// import req from "../image/ReqWall.png";

// import hbgBtn from "../image/hamburgerBtn.png";

const Navigation = () => {
  const [dropIntro, setDropIntro] = useState(false);
  // const [dropServ, setDropServe] = useState(false);
  const [dropPort, setDropPort] = useState(false);
  const [dropReq, setDropReq] = useState(false);
  const [dropHire, setDropHire] = useState(false);

  const [backgrnd, setBackgrnd] = useState("back");
  const router = useSelector((state) => state.router.location.pathname);

  useEffect(() => {
    const backChange = (text) => {
      document
        .querySelectorAll(".defaultback")[0]
        .classList.remove("back","portfolio","request","hire-staff");
      document.querySelectorAll(".defaultback")[0].classList.add(text);
    };
    document
      .querySelectorAll(".mainNavTxt")[1]
      .addEventListener("mouseenter", function () {
        backChange("portfolio");
      });
    document
      .querySelectorAll(".mainNavTxt")[1]
      .addEventListener("mouseleave", function () {
        backChange("back");
      });
    document
      .querySelectorAll(".mainNavTxt")[2]
      .addEventListener("mouseenter", function () {
        backChange("request");
      });
    document
      .querySelectorAll(".mainNavTxt")[2]
      .addEventListener("mouseleave", function () {
        backChange("back");
      });
    document
      .querySelectorAll(".mainNavTxt")[3]
      .addEventListener("mouseenter", function () {
        backChange("portfolio");
      });
    document
      .querySelectorAll(".mainNavTxt")[3]
      .addEventListener("mouseleave", function () {
        backChange("back");
      });
  });

  // function f2(){
  //   console.log("test1");
  //   // document.querySelectorAll(".defaultback")[0].classList.remove("back");
  //   // document.querySelectorAll(".defaultback")[0].classList.add("intro");

  // }

  return (
    <div className="wrap">
      <div className="main-nav-display">
        <div className="mainNavAuto">
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropIntro(!dropIntro);
              // setBackgrnd("intro"); //클래스네임 변경

              //
              // document.querySelector(".defaultback").classList.add("intro");
            }}
            onMouseLeave={() => {
              setDropIntro(!dropIntro);
              // setBackgrnd("bef back");
            }}
          >
            <div
              onClick={() => {
                window.location.pathname = "/intro";
              }}
              className="for-hover"
            >
              회사 소개
            </div>
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

          {/* <div
            className="mainNavTxt"
            onMouseEnter={() => setDropServe(!dropServ)}
            onMouseLeave={() => setDropServe(!dropServ)}
          >
            <div className="for-hover">서비스</div>
            <Dropdown drop={dropServ}>
              <ul>
                <li>웹개발</li>
                <li>App 개발</li>
              </ul>
            </Dropdown>
          </div> */}

          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropPort(!dropIntro);
              setBackgrnd("portfolio"); //클래스네임 변경
            }}
            onMouseLeave={() => {
              setDropPort(!dropPort);
              setBackgrnd("back");
            }}
          >
            <div className="for-hover" onClick={() => {
                    window.location.pathname = "/portfolio";
                  }}>포트폴리오</div>
            {/* <Dropdown drop={dropPort}>
              <ul>
                <li>포트폴리오</li>
              </ul>
            </Dropdown> */}
          </div>
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropReq(!dropReq);
              setBackgrnd("request");
            }}
            onMouseLeave={() => {
              setDropReq(!dropReq);
              setBackgrnd("back");
            }}
          >
            <div className="for-hover">문의 &amp; 의뢰</div>
            {/* <Dropdown drop={dropReq}>
              <ul>
                <li>CEO 인사말</li>
                <li>연혁</li>
                <li>조직도</li>
              </ul>
            </Dropdown> */}
          </div>
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropHire(!dropHire);
              setBackgrnd("hireStaff");
            }}
            onMouseLeave={() => {
              setDropHire(!dropHire);
              setBackgrnd("back");
            }}
          >
            <div className="for-hover">인재 채용</div>
            {/* <Dropdown drop={dropHire}>
              <ul>
                <li>CEO 인사말</li>
                <li>연혁</li>
                <li>조직도</li>
                <li>CEO 인사말</li>
                <li>CI 소개</li>
                <li>찾아오시는 길</li>
              </ul>
            </Dropdown> */}
          </div>
        </div>
        {/* <Image onClick={toggleMenu} src={hbgBtn} /> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navigation;

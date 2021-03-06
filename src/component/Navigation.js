import React, { useState } from "react";
// import { useSelector } from "react-redux";
import Dropdown from "../element/Dropdown";
import "../css/toggle.css";
// import back from "../image/back.png";

// import intro from "../image/IntroWall.png";
// import port from "../image/PortWall.png";
// import req from "../image/ReqWall.png";

// import hbgBtn from "../image/hamburgerBtn.png";

const Navigation = (props) => {
  const [dropIntro, setDropIntro] = useState(false);
  // const [dropServ, setDropServe] = useState(false);
  const [dropPort, setDropPort] = useState(false);
  const [dropReq, setDropReq] = useState(false);
  const [dropHire, setDropHire] = useState(false);

  const changeSlogan = (slg) => {
    props.setSlogan(slg);
  }

  const setBackgrnd = (back) => {
    props.setBackgrnd(back);
  }

  
  // useEffect(() => {
  //   const backChange = (text) => {
  //     document
  //       .querySelectorAll(".defaultback")[0]
  //       .classList.remove("back", "portfolio", "request", "hire-staff");
  //     document.querySelectorAll(".defaultback")[0].classList.add(text);
  //   };
  //   document
  //     .querySelectorAll(".mainNavTxt")[1]
  //     .addEventListener("mouseenter", function () {
  //       backChange("portfolio");
  //     });
  //   document
  //     .querySelectorAll(".mainNavTxt")[1]
  //     .addEventListener("mouseleave", function () {
  //       backChange("back");
  //     });
  //   document
  //     .querySelectorAll(".mainNavTxt")[2]
  //     .addEventListener("mouseenter", function () {
  //       backChange("request");
  //     });
  //   document
  //     .querySelectorAll(".mainNavTxt")[2]
  //     .addEventListener("mouseleave", function () {
  //       backChange("back");
  //     });
  //   document
  //     .querySelectorAll(".mainNavTxt")[3]
  //     .addEventListener("mouseenter", function () {
  //       backChange("hire-staff");
  //     });
  //   document
  //     .querySelectorAll(".mainNavTxt")[3]
  //     .addEventListener("mouseleave", function () {
  //       backChange("back");
  //     });
  // });

  return (
    <div className="wrap">
      <div className="main-nav-display">
        <div className="mainNavAuto">
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropIntro(!dropIntro);
               //??????????????? ??????
               setBackgrnd('intro')
              //
              // document.querySelector(".defaultback").classList.add("intro");
            }}
            onMouseLeave={() => {
              setDropIntro(!dropIntro);
              setBackgrnd("back");
            }}
          >
            <div
              onClick={() => {
                window.location.pathname = "/intro";
              }}
              className="for-hover"
            >
              ?????? ??????
            </div>
            <Dropdown drop={dropIntro}>
              <ul>
                {/* <li className="list-head">?????? ??????</li> */}
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/greeting";
                  }}
                >
                  CEO ?????????
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/history";
                  }}
                >
                  ??????
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/officetree";
                  }}
                >
                  ?????????
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/CIintro";
                  }}
                >
                  CI ??????
                </li>
                <li
                  onClick={() => {
                    window.location.pathname = "/intro/map";
                  }}
                >
                  ??????????????? ???
                </li>
              </ul>
            </Dropdown>
          </div>

          {/* <div
            className="mainNavTxt"
            onMouseEnter={() => setDropServe(!dropServ)}
            onMouseLeave={() => setDropServe(!dropServ)}
          >
            <div className="for-hover">?????????</div>
            <Dropdown drop={dropServ}>
              <ul>
                <li>?????????</li>
                <li>App ??????</li>
              </ul>
            </Dropdown>
          </div> */}

          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropPort(!dropIntro);
              setBackgrnd("portfolio");
              changeSlogan("???????????????");
            }}
            onMouseLeave={() => {
              setDropPort(!dropPort);
              changeSlogan("????????? ???????????? ??????????????? ???/??? ?????? ??????");
              setBackgrnd('back')
            }}
          >
            <div
              className="for-hover"
              onClick={() => {
                window.location.pathname = "/portfolio";
              }}
            >
              ???????????????
            </div>
            {/* <Dropdown drop={dropPort}>
              <ul>
                <li>???????????????</li>
              </ul>
            </Dropdown> */}
          </div>
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropReq(!dropReq);
              changeSlogan("?????????????????????");
              setBackgrnd('request')
            }}
            onMouseLeave={() => {
              setDropReq(!dropReq);
              changeSlogan(`????????? ???????????? \n ??????????????? ???/??? ?????? ??????`);
              setBackgrnd('back')
            }}
          >
            <div className="for-hover" onClick={() => {
                window.location.pathname = "/request";}}>?????? &amp; ??????</div>
            {/* <Dropdown drop={dropReq}>
              <ul>
                <li>CEO ?????????</li>
                <li>??????</li>
                <li>?????????</li>
              </ul>
            </Dropdown> */}
          </div>
          <div
            className="mainNavTxt"
            onMouseEnter={() => {
              setDropHire(!dropHire);
              changeSlogan("????????????");
              setBackgrnd('hire-staff')
            }}
            onMouseLeave={() => {
              setDropHire(!dropHire);
              changeSlogan("????????? ???????????? \n ??????????????? ???/??? ?????? ??????");
              setBackgrnd('back')
            }}
          >
            <div className="for-hover" onClick={() =>
                      (window.location.pathname = "/staff")
                    }>?????? ??????</div>
            {/* <Dropdown drop={dropHire}>
              <ul>
                <li>CEO ?????????</li>
                <li>??????</li>
                <li>?????????</li>
                <li>CEO ?????????</li>
                <li>CI ??????</li>
                <li>??????????????? ???</li>
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

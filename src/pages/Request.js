import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
// import Body from "../element/Body";
import Footer from "../element/Footer";

const Request = () => {
  const [color, setColor] = useState("");
  const click = () => {
    setColor((color) => !color);
  };
  const shapeArr = ["신규제작", "리뉴얼"];
  const typeArr = ["반응형웹", "PC웹", "모바일웹", "기타"];

  // const [selected, isSelected] = useState(false);

  // const colorChange = (e) => {
  //     e.preventDefault();
  //     isSelected(!selected);
  // }

  // let [color, setColor] = useState('#fff');

  // const changeColor = () => {
  //     // console.log(color);
  //     // return;
  //     setColor(color? '#3180F1' : '#fff')
  // }

  // function test(){
  //   // console.log(color);
  // }

  return (
    <>
      <Header />
      <Wrap>
        <Title>웹사이트 제작 요청</Title>
        <Form>
          <MakeType>
            <div className="title">제작 형태</div>
            <div className="button-wrap">
              {shapeArr.map((ele, i) => {
                return (
                  <SelectBtn
                    color={color}
                    className={color ? "button-blue" : "button-white"}
                    onClick={() => click()}
                    key={i}
                    id={ele}
                  >
                    {ele}
                  </SelectBtn>
                );
              })}

              {/* <SelectBtn
                color={color}
                className={color ? "button-blue" : "button-white"}
                onClick={() => click()}
              >
                리뉴얼
              </SelectBtn> */}
            </div>
          </MakeType>
          <MakeType>
            <div className="title">제작 타입</div>
            <div className="button-wrap">
              <SelectBtn
                color={color}
                className={color ? "button-blue" : "button-white"}
                onClick={() => click()}
              >
                반응형 웹
              </SelectBtn>
              <SelectBtn
                color={color}
                className={color ? "button-blue" : "button-white"}
                onClick={() => click()}
              >
                PC웹
              </SelectBtn>
              <SelectBtn
                color={color}
                className={color ? "button-blue" : "button-white"}
                onClick={() => click()}
              >
                모바일웹
              </SelectBtn>
              <SelectBtn
                color={color}
                className={color ? "button-blue" : "button-white"}
                onClick={() => click()}
              >
                기타
              </SelectBtn>
            </div>
          </MakeType>
        </Form>
      </Wrap>
      <Footer />
    </>
  );
};

const Wrap = styled.div`
  justify-content: center;
  display: grid;
`;

const Title = styled.p`
  font-family: scMed;
  font-size: 40px;
  text-align: center;
`;

const Form = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const MakeType = styled.div`
  display: flex;
  margin-right: 10vw;
  .title {
    font-family: scB;
    font-size: 30px;
    line-height: 12.5vh;
    text-align: left;
    padding-right: 2vw;
  }
  .button-wrap {
    display: flex;
    .button-blue {
      width: 120px;
      height: 60px;
      border: 1px solid #d7d7d7;
      border-radius: 60px;
      line-height: 60px;
      text-align: center;
      margin: 2vh 1vw;
      background-color: #fff;
    }
    .button-white {
      width: 120px;
      height: 60px;
      border: 1px solid #d7d7d7;
      border-radius: 60px;
      line-height: 60px;
      text-align: center;
      margin: 2vh 1vw;
      background-color: #3180f1;
      color: #fff;
    }
  }
`;

const SelectBtn = styled.div`
  width: 120px;
  height: 60px;
  border: 1px solid #d7d7d7;
  border-radius: 60px;
  line-height: 60px;
  text-align: center;
  margin: 2vh 1vw;
`;

export default Request;

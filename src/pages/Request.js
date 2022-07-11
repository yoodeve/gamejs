import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
// import Body from "../element/Body";
import Footer from "../element/Footer";

const Request = () => {
  const typeArr = ["반응형웹", "PC웹", "모바일웹", "기타"];
  const shapeArr = ["신규제작", "리뉴얼"];
  
  const [color, setColor] = useState("black");
  // const select = () => {
  //   color === "yellow" ? setColor("red") : setColor("yellow");
  // };

  const click = () => {
    setColor(col=>!col);
  }

  //iscategoryselect===false로 가득찬 배열

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
                console.log(shapeArr);
                return (
                  <>
                    {console.log(ele)}
                    <Input key={i} type="checkbox" />
                    <label key={i} className="choice-btn">
                      <SelectBtn
                        key={ele.i}
                        color={color}
                        onClick={click}
                      >
                        {ele}
                        {console.log(color)}
                      </SelectBtn>
                    </label>
                  </>
                );
              })} 

              {/* <SelectBtn
                color={color}
                className={color ? "button-blue" : "button-white"}
                onClick={() => click()}
              >
                리뉴얼
              </SelectBtn>
            </div>
          </MakeType>
          <MakeType>
            <div className="title">제작 타입</div>
            <div className="button-wrap">
              {/* <SelectBtn
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
              </SelectBtn> */}
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

const Form = styled.form`
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

const Input = styled.input`
  display: none;
`;

const SelectBtn = styled.div`
background-color: ${props => props.color};
  width: 120px;
  height: 60px;
  border: 1px solid #d7d7d7;
  border-radius: 60px;
  line-height: 60px;
  text-align: center;
  margin: 2vh 1vw;
`;

export default Request;

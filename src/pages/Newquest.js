import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Footer from "../element/Footer";

const Newquest = () => {
  return (
    <>
      <Header />
      <Wrap>
        <Title>웹사이트 제작 요청</Title>

        <FormBox>
            
        </FormBox>
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

const FormBox = styled.span`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const RadioBtn = styled.input.attrs({ type: "radio" })`
  width: 120px;
  height: 60px;
  border: 1px solid #d7d7d7;
  border-radius: 60px;
  line-height: 60px;
  text-align: center;
  margin: 2vh 1vw;
  &:checked {
  }
`;

export default Newquest;

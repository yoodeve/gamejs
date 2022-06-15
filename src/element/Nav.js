import React from "react";
import styled from 'styled-components';

const Navi = () => {
  return (
    <Z>
      <Div>
      <Ul>
        <Li>회사소개</Li>
        <Li>서비스</Li>
        <Li>포트폴리오</Li>
        <Li>문의 &amp; 의뢰</Li>
        <Li>인재채용</Li>
      </Ul>
      </Div>
    </Z>
  );
};

const Z = styled.div`
  z-index: 999;
top:828px;
position: absolute;
display: flex;
`
const Div = styled.div`
  margin:auto;
`
const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
`;
const Li = styled.li`
  list-style: none;
  float: left;
  margin: 20px;
  border-top: 1px solid #ffffff;
  width: 200px;
  text-align: center;
`;

export { Navi };

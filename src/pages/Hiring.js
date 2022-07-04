import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Footer from "../element/Footer";

import jobkorea from "../image/Jobkorea.png";
import saramin from "../image/Saramin.png";
import worknet from "../image/Worknet.png";

const Hiring = () => {
  return (
    <>
      <Header />
      <Body>
        {/* 제목부분 */}
        <Wrap>
          <div className="headline">게임인스 채용 절차</div>
          <div className="desc">(채용절차에 대해 설명)</div>
        </Wrap>
        {/* 가로정렬 */}
        <StepDiv>
          {/* 카드 개별 */}
          <Card color='#B0CEF9'>
            {/* 카드 내 요소 묶어서 가운데정렬 */}
            <div className="wrapper">
              <div className="circle">01</div>
              <div className="step">지원서 접수</div>
              <div className="desc">
                각 모집분야의 자격기준에 <br />
                부합되는 경우 연령, 성별, <br />
                국적에 제한없이 지원 가능합니다.
              </div>
            </div>
          </Card>
          <Card color="#81B2F9">
            <div className="circle">01</div>
            <div className="step">서류전형</div>
            <div className="desc">
              지원자격 보유여부 확인 및<br />
              자기 소개서를 통해 잠재역량을 <br />
              평가합니다.
            </div>
          </Card>
          <Card color="#5D9CF8">
            <div className="circle">01</div>
            <div className="step">실무 면접</div>
            <div className="desc">
              지원자의 인성과 적성이 당사의
              <br />
              조직과 인재상에 부합하는지
              <br />
              종합적으로 평가합니다.
            </div>
          </Card>
          <Card color="#5D9CF8">
            <div className="circle">01</div>
            <div className="step">최종합격</div>
            <div className="desc">
              실무면접에 합격하신 분께는
              <br />
              근로조건 협의 후 입사가
              <br />
              진행됩니다.
            </div>
          </Card>
        </StepDiv>
        <Attention>
          <ul className="ul">
            <li className="li-head">유의사항</li>
            <li className="li">
              최종 심사를 거친 결과를 합격자에게 개별 통보합니다.
            </li>
            <li className="li">
              이력서에 기재된 학력 및 경력사항 등 기재 사항이 허위임이 판명될
              경우, 합격이 취소될 수 있습니다.
            </li>
          </ul>
        </Attention>
        {/* 채용공고 링크 */}
        <JobPostingList>인재 채용</JobPostingList>
        <LinkSection>
        <Portal href="https://www.jobkorea.co.kr/Recruit/GI_Read/38776183?Oem_Code=C1&logpath=1&stext=%EA%B2%8C%EC%9E%84%EC%9D%B8%EC%8A%A4&listno=1" target='_blank'>
          <LinkCard>
            <img src={jobkorea} alt="" />
            <div className="apply-btn">
              잡코리아 지원하기&nbsp;&nbsp;&nbsp;&gt;
            </div>
          </LinkCard>
          </Portal>
          <Portal href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=VEUrcjd2QyswZ21PbTBYZmVqMTRrUT09" target='_blank'>
          <LinkCard>
            <img src={saramin} alt="" />
            <div className="apply-btn">
              사람인 지원하기&nbsp;&nbsp;&nbsp;&gt;
            </div>
          </LinkCard>
          </Portal>
          <Portal href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=VEUrcjd2QyswZ21PbTBYZmVqMTRrUT09" target='_blank'>
          <LinkCard>
            <img src={worknet} alt="" />
            <div className="apply-btn">
              워크넷 지원하기&nbsp;&nbsp;&nbsp;&gt;
            </div>
          </LinkCard>
          </Portal>
        </LinkSection>
        <FAQ>채용관련 문의 : 경영지원팀 010 - 9893 - 1002</FAQ>
      </Body>
      <Footer />
    </>
  );
};

const Body = styled.div`
  justify-content: center;
  display: grid;
  background-color: #fff;
  margin: 20vh 0;
`;

const Wrap = styled.div`
  .headline {
    font-family: scMed;
    font-size: 2.5rem;
    text-align: center;
  }
  .desc {
    font-family: scReg;
    font-size: 1.25rem;
    text-align: center;
    padding: 15px 0;
  }
`;

const StepDiv = styled.div`
  margin: 5vh 0;
  display: flex;
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.color};
  border-top: 10px solid ${(props) => props.color};
  width: 260px;
  height: 270px;
  margin: 30px;
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .circle {
    height: 68px;
    width: 68px;
    border: 4px solid #3180F1;
    border-radius: 68px;
    text-align: center;
    color: #3180F1;
    line-height: 73px;
    font-size: 30px;
    font-family: scB;
    margin: 40px auto;
  }
  .step {
    text-align: center;
    font-family: scMed;
    font-size: 26px;
    margin: 20px 0 20px 0;
  }
  .desc {
    text-align: center;
  }
`;

const JobPostingList = styled.p`
text-align: center;
font-size: 40px;
font-family: scMed;
`

const Attention = styled.div`
  margin: 5vh 0 5vh 0;
  .li-head {
    list-style: none;
    font-size: 22px;
    font-family: scMed;
    margin: 10px 0;
  }
  .li {
    margin: 10px 0;
  }
`;

const LinkSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Portal = styled.a`
text-decoration: none;
color: #000;
`

const LinkCard = styled.div`
  display: grid;
  .apply-btn {
    width: 160px;
    height: 40px;
    border: 1px solid #d6d6d6;
    border-radius: 50px;
    text-align: center;
    line-height: 42px;
    font-weight: scReg;
    font-size: 0.9rem;
    margin: 5px auto;
  }
`;

const FAQ = styled.p`
text-align: center;
font-family: scMed;
font-size: 36px;
margin: 10vh 0 0 0;
`;

export default Hiring;

import React from 'react';
import styled from 'styled-components';
import logo from '../image/FooterLogo.png'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLogo src={logo} />
            <FooterP>이용약관   |   개인정보처리방침   |   책임의 한계와 법적고지</FooterP>
            <FooterP>(주)게임인스     대표이사: 김웅겸     주소: 부산광역시 사상구 백양대로684 1F E-mail: gameinscokr@naver.com     사업자등록번호: 362-88-00435     통신판매업 등록번호: 1649-3196-3663-0809</FooterP>
            <FooterP>Copyright 2022 GAMEINS All right reserved</FooterP>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
height: 130px;
width: 100vw;
/* margin-top: -10px; */
background-color: #212121;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`

const FooterLogo = styled.img`
padding: 10px;
`

const FooterP = styled.p`
padding: 0;
margin: 3px 0;
font-size: 10px;
font-weight: 400;
color: #fff;
`

export default Footer;
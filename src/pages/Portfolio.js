import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import Body from '../element/Body';
import Footer from '../element/Footer';

import portImg from '../image/PortImg.png';

const Portfolio = () => {
    return (
        <>
        <Header />
        <Body>
            <Text>
                게임인스어쩌고저쩌고아아아아아아아
            </Text>
            </Body>
            <Body>
            <ImgDiv>
                <img className='port-image' src={portImg} alt="" />
            </ImgDiv>
        </Body>
        <Footer />
        </>
    );
};

const Text = styled.div`
    font-size: 30px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
`

const ImgDiv = styled.div`

`

export default Portfolio;
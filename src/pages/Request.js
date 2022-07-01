import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import Body from '../element/Body';
import Footer from '../element/Footer';

const Request = () => {
    return (
        <div>
            <Header />
            <Body>
                <Title>웹사이트 및 컨텐츠 제작 요청</Title>
                <Form>
                    
                </Form>
            </Body>
            <Footer />
        </div>
    );
};

const Title = styled.p`
font-family: scMed;
font-size: 40px;
text-align: center;
`

const Form = styled.form`

`

export default Request;
import React from 'react';
import Header from '../component/Header';
import Body from '../element/Body';
import Footer from '../element/Footer';

import tree from '../image/GroupTree.png'

const Tree = () => {
    return (
        <div>
            <Header />
            <Body margint='30vh' marginb='30vh'>
                <img src={tree} alt='' />
            </Body>
            <Footer />
        </div>
    );
};

export default Tree;
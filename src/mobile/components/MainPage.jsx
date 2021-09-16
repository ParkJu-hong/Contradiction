import React from 'react';
// import styled, { injectGlobal, keyframes } from "styled-component";
import styled from "styled-components";
import Footer from "./Footer";
import Menubar from './Menubar';

function MainPage() {
    return (
        <>
            <Menubar />
            <Img src="img/headerImg.png" alt="modument_logo"></Img>
            <Footer />
        </>
    )
}

const Img = styled.img`
    width: 100%;
`;



export default MainPage

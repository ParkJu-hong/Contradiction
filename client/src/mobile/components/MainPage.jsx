import React from 'react';
// import styled, { injectGlobal, keyframes } from "styled-component";
import styled from "styled-components";
import Footer from "./Footer";
import Menubar from './Menubar';
import MenuView from './MenuView';
import { useSelector } from 'react-redux';

function MainPage() {

    const isMenuOpen = useSelector(state => {
        return state.reducerMenu.menu;
    });

    return (
        <>
            <MenuView />
            <Menubar />
            <Img src="img/4.jpeg" alt="moudument_logo"></Img>
            <Footer />
        </>
    )
}

const Img = styled.img`
    width: 100%;
`;



export default MainPage

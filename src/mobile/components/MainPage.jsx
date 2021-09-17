import React from 'react';
// import styled, { injectGlobal, keyframes } from "styled-component";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Footer from "./Footer";
import Menubar from './Menubar';
import MenuView from './MenuView';

function MainPage() {
    const isMenu = useSelector(state => {
        return state.reducerMenu.menu;
    });

    return (
        <>
            {!isMenu ? <>
                <Menubar />
                <Img src="img/headerImg.png" alt="modument_logo"></Img>
                <Footer /></> : <MenuView/>}

        </>
    )
}

const Img = styled.img`
    width: 100%;
`;



export default MainPage

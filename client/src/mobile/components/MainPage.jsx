import React from 'react';
// import styled, { injectGlobal, keyframes } from "styled-component";
import styled from "styled-components";
import { Motion, spring } from 'react-motion';
import { useDispatch } from 'react-redux';

import Footer from "./Footer";
import Menubar from './Menubar';
import MenuView from './MenuView';


function MainPage() {

    const dispatch = useDispatch();

    return (
        <Main>
            <MenuView />
            <Menubar />
            <div onClick={() => {
                dispatch({ type: 'CLOSE_MENU' })
            }}>
                <br></br><br></br><br></br><br></br><br></br>
                <Motion
                    defaultStyle={{ x: -200, opacity: 0 }}
                    style={{ x: spring(0), opacity: spring(1) }}
                >
                    {(style) => (
                        <>
                        <Div style={{ }}>
                           <strong style={{ opacity: style.opacity}}>[chaerin] <br/> always let's faceit 🧸<br></br>하채린</strong>
                        </Div>
                        <Div style={{ marginTop: '70%'}}><Footer style={{ opacity: style.opacity}} /></Div>
                        </>)}
                </Motion>
            </div>
        </Main>
    )
}
/* 
<strong>[chaerin] <br/> always let's faceit 🧸</strong>
*/


const Div = styled.div`
    text-align: right;
    margin-right: 20px;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
`



export default MainPage

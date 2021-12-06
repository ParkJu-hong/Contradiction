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
        <>
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
                        <Div style={{ height: '100%'}}>
                           <strong style={{ opacity: style.opacity}}>[chaerin] <br/> always let's faceit 🧸</strong>
                        </Div>
                        <Div style={{}}><Footer style={{ opacity: style.opacity}} /></Div>
                        </>)}
                </Motion>
            </div>
        </>
    )
}
/* 
<strong>[chaerin] <br/> always let's faceit 🧸</strong>
*/


const Div = styled.div`
    display: flex;
    justify-content: center;
`



export default MainPage

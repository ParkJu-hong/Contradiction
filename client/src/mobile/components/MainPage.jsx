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
                <Motion
                    defaultStyle={{ x: -200, opacity: 0 }}
                    style={{ x: spring(0), opacity: spring(1) }}
                >
                    {(style) => (
                        <Div>
                            {/* 정상 작동됌 {console.log('style.opacity : ', style.opacity)} */}
                            {/* <Img src="img/4.jpeg" alt="moudument_logo" style={{ opacity: style.opacity }}></Img> */}
                            <p style={{ opacity: style.opacity }}>채린 on</p>
                            <br></br>
                            <Footer style={{ opacity: style.opacity}} />
                        </Div>)}
                </Motion>
            </div>
        </>
    )
}


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`



export default MainPage

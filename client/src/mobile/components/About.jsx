import React from 'react'
import { useDispatch } from 'react-redux';
import { Motion, spring } from 'react-motion';

import styled from 'styled-components';
import Menubar from './Menubar';
import MenuView from './MenuView';

function About() {

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
                        <Div style={{ opacity: style.opacity }}>
                               about
                        </Div>
                    )}

                </Motion>
            </div>
        </>
    )
}
const Div = styled.div`
    text-align: center;
`;
export default About

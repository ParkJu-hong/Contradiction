import React from 'react'
import styled from 'styled-components';
import Menubar from './Menubar';
import MenuView from './MenuView';

function About() {

    return (
        <>
            <MenuView />
            <Menubar />
            <br></br><br></br><br></br><br></br><br></br>
            <Div>
                About
            </Div>
        </>
    )
}
const Div = styled.div`
    text-align: center;
`;
export default About

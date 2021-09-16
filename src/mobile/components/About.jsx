import React from 'react'
import styled from 'styled-components';
import Menubar from './Menubar';

function About() {
    return (
        <>
            <Menubar />
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

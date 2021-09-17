import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Menubar from './Menubar';
import MenuView from './MenuView';

function About() {
    const isMenu = useSelector(state => {
        return state.reducerMenu.menu;
    });
    return (
        <>
            {!isMenu ? <>
                <Menubar />
                <br></br><br></br><br></br><br></br><br></br>
                <Div>
                    About
                </Div> 
                </> : <MenuView />}
        </>
    )
}
const Div = styled.div`
    text-align: center;
`;
export default About

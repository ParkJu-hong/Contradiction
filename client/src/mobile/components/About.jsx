import React from 'react'
import styled from 'styled-components';
import Menubar from './Menubar';
import { useSelector } from 'react-redux';
import MenuView from './MenuView';

function About() {

    const isMenuOpen = useSelector(state => state.reducerMenu.menu)

    return (<>
        {isMenuOpen ? <MenuView /> :
            <>
                <Menubar />
                <br></br><br></br><br></br><br></br><br></br>
                <Div>
                    About
                </Div>
            </>
        }
    </>
    )
}
const Div = styled.div`
    text-align: center;
`;
export default About

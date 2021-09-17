import React from 'react';
import styled from 'styled-components';
import Menubar from './Menubar';
import MenuView from './MenuView';
import { useSelector } from 'react-redux';

function Notices() {
    const isMenu = useSelector(state => {
        return state.reducerMenu.menu;
    });
    return (
        <>
                {!isMenu ? <>
                <Menubar />
                <br></br><br></br><br></br><br></br><br></br>
                <Div>
                    공지사항입니다.
                </Div> 
                </> : <MenuView />}
        </>
    )
}
const Div = styled.div`
    text-align: center;
`;
export default Notices

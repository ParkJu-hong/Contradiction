import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

let isMenu = false;


function Menubar() {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    // isMenu가 함수컴포넌트 안에 있어서 전역의 styled-component가 사용하지 못하는 중임
    const _isMenu = useSelector(state => {
        isMenu = state.reducerMenu.menu;
        return state.reducerMenu.menu;
    });

    return (
        <>
            <StateBar>
                <StateBarColumn style={{ paddingTop: '5px' }}>
                    <FontAwesomeIcon icon={faBars}
                        size="3x"
                        onClick={() => {
                            if (!_isMenu) {
                                dispatch({ type: 'OPEN_MENU' })
                            } else {
                                dispatch({ type: 'CLOSE_MENU' })
                            }
                        }} /></StateBarColumn>
                         <StateBarColumn ><Link to='/' style={{ textDecoration: 'none', color: 'black', fontSize: '50px' }} >Hachaerin</Link></StateBarColumn>
 
            </StateBar>
            {/* <SideMenu className="SideMenu_test">SideMenu</SideMenu> */}
        </>
    )
}


// const SideMenu = styled.div`
//     background-color: black;
//     width:300px;
//     height: 100%;
//     position: fixed;
//     top: 0;
//     // 조건부 스타일드를 어떻게 하지.. ㅎㅎ
//     left: ${ isMenu === false ? '-300px' : '0px'};
//     z-index: 1;
//     transition: all .35s;
// `;



const StateBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 20px;
    /* background-color: red; for test*/
    position: static;
`;

const StateBarColumn = styled.div`
`;


export default Menubar;

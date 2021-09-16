import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';


function Menubar() {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    // store에 접근하여 state 가져오기
    const isMenu = useSelector(state => {
        return state.reducerMenu.menu;
    });
    const Menus = useSelector(state => {
        return state.reducerMenu.menus;
    });


    return (
        <>
            <Div>
                <FontAwesomeIcon icon={faBars} className="links" onClick={() => {
                    if (!isMenu) {
                        dispatch({ type: 'OPEN_MENU' })
                    } else {
                        dispatch({ type: 'CLOSE_MENU' })
                    }
                }} />
                <Link to='/' className="links">Contradiction</Link>
                <Link to='/faBell' className="links"><FontAwesomeIcon icon={faBell} /></Link>
            </Div>
            {isMenu ? Menus.map((el, idx) => <Link to={`/${el}`} onClick={() => {
                dispatch({ type: 'CLOSE_MENU' });
            }}><Menu key={idx}>{el}</Menu></Link>) : ''}
        </>
    )
}


const Div = styled.div`
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: space-around;
`;

const Menu = styled.div`
    text-align: center;
`;

export default Menubar;

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
    const isMenu = useSelector(state => {
        return state.reducerMenu.menu;
    });

    return (
        <>
            <StateBar>
                <StateBarColumn><FontAwesomeIcon icon={faBars} className="links" onClick={() => {
                    if (!isMenu) {
                        dispatch({ type: 'OPEN_MENU' })
                    } else {
                        dispatch({ type: 'CLOSE_MENU' })
                    }
                }} /></StateBarColumn>
                <StateBarColumn><Link to='/' style={{ textDecoration: 'none', color: 'black'}} className="links">Contradiction</Link></StateBarColumn>
                <StateBarColumn><Link to='/faBell' style={{ textDecoration: 'none', color: 'black' }} className="links"><FontAwesomeIcon icon={faBell} /></Link></StateBarColumn>
            </StateBar>

        </>
    )
}


const StateBar = styled.div`
    /* display: flex;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    position: fixed; */
    display: flex;
    width: 100%;
    padding: 20px;
    position: fixed;
`;

const StateBarColumn = styled.div`
    width: 33%;
    text-align: center;
`;


export default Menubar;

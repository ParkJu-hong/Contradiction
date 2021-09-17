import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MenuView() {
    const dispatch = useDispatch();
    const Menus = useSelector(state => {
        return state.reducerMenu.menus;
    });

    return (
        <>
            {Menus.map((el, idx) => <Link to={`/${el}`} style={{ textDecoration: 'none', color: 'black' }} 
            onClick={() => {
                dispatch({ type: 'CLOSE_MENU' });
            }}><Menu key={idx}>{el}</Menu></Link>)}
        </>
    )
}

const Menu = styled.div`
    font-size: 50px;
    text-align: center;
    text-decoration-line: none;
`;

export default MenuView

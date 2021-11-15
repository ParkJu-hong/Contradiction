import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { combineReducers } from 'redux';

function MenuView() {
    const dispatch = useDispatch();
    const Menus = useSelector(state => {
        return state.reducerMenu.menus;
    });
    const isOpenMenu = useSelector(state => {
        return state.reducerMenu.menu;
    })

    let temp = isOpenMenu ? '0px' : '-300px';

    console.log('temp : ', temp);

    const SideMenuBar = styled.div`
        width: 300px;
        height: 100%;
        background-color: white;
        position: fixed;
        top: 0;
        left: ${temp};
        z-index: 1;
        transition: all 1s;
    `;

    const Menu = styled.div`
    font-size: 10px;
    text-align: center;
    text-decoration-line: none;
    `;

    return (
        <>
        <SideMenuBar>
            {Menus.map((el) => <Link to={`/${el.title}`} style={{ textDecoration: 'none', color: 'black' }}
                onClick={() => {
                    dispatch({ type: 'CLOSE_MENU' });
                }}><Menu key={el.id}>{el.title}</Menu></Link>)}
        </SideMenuBar>
        </>
    )
}

export default MenuView

/*
    트랜지션 효과: 모든 프로퍼티의 변화를 2초에 걸쳐 전환한다.
    transition:(css속성명) (변화시간) (변화타입) (딜레이시간);
    transition:all 500ms linear;
*/
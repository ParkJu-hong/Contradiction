import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Motion, spring } from 'react-motion';

function MenuView() {
    const dispatch = useDispatch();
    const Menus = useSelector(state => {
        return state.reducerMenu.menus;
    });
    const isOpenMenu = useSelector(state => {
        return state.reducerMenu.menu;
    })
    const galleryMenu = useSelector(state => {
        return state.reducerMenu.galleryMenu;
    })

    const galleryMenus = useSelector(state => {
        return state.reducerMenu.galleryMenus
    })

    useEffect(() => {
        // console.log('galleryMenu : ', galleryMenu);
        // console.log('window.location.href.substr(22) : ', window.location.href.substr(22));
    }, [galleryMenu])

    let temp = isOpenMenu ? '0px' : '-200px';


    const SideMenuBar = styled.div`
        width: 200px;
        height: 100%;
        background-color: white;
        position: fixed;
        top: 0;
        z-index: 1;
        left: ${temp};
        /* transition: all 1s; */
        margin-top: 80px;
    `;

    const Menu = styled.div`
    margin: 20px;
    font-size: 20px;
    text-align: center;
    text-decoration-line: none;
    `;

    return (
        <>
            {galleryMenu ? <Motion
                defaultStyle={{ x: -200, opacity: 0 }}
                style={{ x: 0, opacity: spring(isOpenMenu ? 1 : 0) }}
            >
                {(style) => (
                    <SideMenuBar style={{ opacity: style.opacity }}>
                        {galleryMenus.map((el) => {
                            return <Link to={`/${el.title}`} style={{ textDecoration: 'none', color: 'black' }}
                                onClick={() => {
                                    dispatch({
                                        type: 'CLOSE_AND_CHEANGE_CATEGORY',
                                        payload: {
                                            category: el.title
                                        }
                                    });
                                }}><Menu key={el.id}>{el.title}</Menu></Link>
                        })}
                    </SideMenuBar>)}
            </Motion> : <Motion
                defaultStyle={{ x: -200, opacity: 0 }}
                style={{ x: 0, opacity: spring(isOpenMenu ? 1 : 0) }}
            >
                {(style) => (
                    <SideMenuBar style={{ opacity: style.opacity }}>
                        {Menus.map((el) => <Link to={`/${el.title === 'Gallery' ? window.location.href.substr(31) : el.title}`} style={{ textDecoration: 'none', color: 'black' }}
                            onClick={() => {
                                if (el.title === 'Gallery') {
                                    dispatch({
                                        type: 'OPEN_GALLERY_MEUNS'
                                    })
                                } else {
                                    dispatch({
                                        type: 'CLOSE_AND_CHEANGE_CATEGORY',
                                        payload: {
                                            category: el.title
                                        }
                                    });
                                }
                            }}><Menu key={el.id}>{el.title}</Menu></Link>)}
                    </SideMenuBar>
                )}
            </Motion>}
        </>
    )
}

export default MenuView

/*
    트랜지션 효과: 모든 프로퍼티의 변화를 2초에 걸쳐 전환한다.
    transition:(css속성명) (변화시간) (변화타입) (딜레이시간);
    transition:all 500ms linear;
*/
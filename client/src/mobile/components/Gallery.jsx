import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Motion, spring } from 'react-motion';

import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import { Link } from 'react-router-dom';
import MenuView from './MenuView';

function Gallery() {
    const [forCleanUp, setForCleanUp] = useState(true);
    const [pictures, setPictures] = useState([]);

    const dispatch = useDispatch();


    const isMenuOpen = useSelector(state => {
        return state.reducerMenu.menu;
    });

    useEffect(() => {
        if (forCleanUp) {
            setPictures(picturesUrl);
            // 웹 서버 구현하면 여기서 Ajax요청할 것
        }
        return () => {
            setForCleanUp(false);
        }
    }, [forCleanUp]);

    return (
        <>
            <>
                <MenuView />
                <Menubar />
                <Motion
                    defaultStyle={{ x: -200, opacity: 0 }}
                    style={{ x: spring(0), opacity: spring(1) }}
                >
                    {(style) => (
                        <Div>
                            {pictures.map((el, idx) =>
                                <Link key={idx} to={`/viewdetail`}>
                                    <Img src={el.src} 
                                        style={{ opacity: style.opacity }}
                                        onClick={() => {
                                        dispatch({
                                            type: 'CHANGE_VIEWDETAIL',
                                            payload: {
                                                picture: el,
                                                src: el.src
                                            }
                                        })
                                    }}></Img></Link>
                            )}
                        </Div>

                    )}

                </Motion>
            </>
        </>
    )
}

const Div = styled.div`
    text-align: center;
`;
const Img = styled.img`
    /* padding: 25px; */
    width: 70%;
    height: 30%;
    animation-name: name;
    animation-duration: 5s;
`;

export default Gallery

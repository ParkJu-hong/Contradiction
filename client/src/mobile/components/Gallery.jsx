import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Motion, spring } from 'react-motion';

import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import MenuView from './MenuView';
import ViewDetail from './ViewDetail';

function Gallery({ category }) {
    const [forCleanUp, setForCleanUp] = useState(true);
    const [pictures, setPictures] = useState([]);
    const [isPictureSelected, setIsPictureSelected] = useState(false);

    const dispatch = useDispatch();




    useEffect(() => {
        if (forCleanUp) {
            setPictures(picturesUrl[category]);
            // 웹 서버 구현하면 여기서 Ajax요청할 것
        }
        return () => {
            setForCleanUp(false);
        }
    }, [forCleanUp]);

    return (
        <>
            {isPictureSelected ? <ViewDetail closeDetail={setIsPictureSelected}/> :
                <>
                    <MenuView />
                    <Menubar />
                    <div onClick={() => {
                        dispatch({ type: 'CLOSE_MENU' })
                    }}>
                        <Motion
                            defaultStyle={{ x: -200, opacity: 0 }}
                            style={{ x: spring(0), opacity: spring(1) }}
                        >
                            {(style) => (
                                <Div>
                                    {pictures.map((el, idx) =>
                                        <Img src={el.src}
                                            style={{ opacity: style.opacity }}
                                            onClick={() => {
                                                dispatch({
                                                    type: 'CHANGE_VIEWDETAIL',
                                                    payload: {
                                                        picture: el
                                                    }
                                                });
                                                setIsPictureSelected(!isPictureSelected);
                                            }}></Img>
                                    )}
                                </Div>
                            )}

                        </Motion>
                    </div>
                </>
            }
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

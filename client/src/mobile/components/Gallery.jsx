import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import MenuView from './MenuView';
import ViewDetail from './ViewDetail';
import axios from 'axios';

function Gallery({ season }) {
    const [pictures, setPictures] = useState([]);
    const [isPictureSelected, setIsPictureSelected] = useState(false);
    const [forCleanUp, setForCleanUp] = useState(true);


    const dispatch = useDispatch();


    const category = useSelector(state => {
        return state.reducerMenu.category
    });


    useEffect(async () => {
        if (forCleanUp) {
            await axios(`ec2-13-124-170-23.ap-northeast-2.compute.amazonaws.com:80/gallery/read?season=${season}`)
                .then((data) => {
                    setPictures(data.data);
                    return;
                })
        }
        return ()=>{
            setForCleanUp(false);
        }
    }, [category]);

    return (
        <>
            {isPictureSelected ? <ViewDetail closeDetail={setIsPictureSelected} /> :
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
                                            key={idx}
                                            style={{ opacity: style.opacity }}
                                            onClick={() => {
                                                dispatch({
                                                    type: 'CHANGE_VIEWDETAIL',
                                                    payload: {
                                                        picture: el
                                                    }
                                                });
                                                setIsPictureSelected(!isPictureSelected);
                                            }}>{console.log('style.opacity : ', style.opacity)}</Img>
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

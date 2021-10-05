import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import { Link } from 'react-router-dom';

function Gallery() {
    const [forCleanUp, setForCleanUp] = useState(true);
    const [pictures, setPictures] = useState([]);

    const dispatch = useDispatch();


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
                <Menubar />
                <Div>
                    {pictures.map((el, idx) =>
                        <Link key={idx} to={`/viewdetail`}>
                            <Img src={el.src} onClick={() => {
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

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import MenuView from './MenuView';
import ViewDetail from './ViewDetail';

function Winter({}) {
    // const [forCleanUp, setForCleanUp] = useState(true);
    const [pictures, setPictures] = useState([]);
    const [isPictureSelected, setIsPictureSelected] = useState(false);
    // const [testConut, setTestCount] = useState(0);
    // const [test, setTest] = useState(0);
   
   
    const dispatch = useDispatch();
    
    
    const category = useSelector(state => {
        return state.reducerMenu.category
    });


    useEffect(() => {
            // console.log('category : ', category);
            // console.log("picturesUrl[category] : ", picturesUrl[category]);
            setPictures(picturesUrl[category]);
            // let temp = testConut + 1;
            // setTestCount(temp);
            // console.log('testConut : ', testConut);
            // 웹 서버 구현하면 여기서 Ajax요청할 것
        });

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

export default Winter

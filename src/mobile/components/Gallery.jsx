import React, {useState, useEffect}from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import ViewDetail from './ViewDetail';
import { Link } from 'react-router-dom';

function Gallery() {
    let forCleanUp = true;
    const [pictures, setPictures] = useState([])

    const dispatch = useDispatch();


    useEffect(()=>{
        if(forCleanUp){
            setPictures(picturesUrl);
            // 웹 서버 구현하면 여기서 Ajax요청할 것
        }
        return ()=>{
            forCleanUp = false;
        }
    },[]);

    console.log('pictures : ', pictures);

    return (
        <>
        <Menubar />
        <Div>
            {pictures.map((el, idx)=>
            <Link key={idx} to={`/viewdetail`}>
                <Img src={el} onClick={()=>{
                    dispatch({
                        type: 'CHANGE_VIEWDETAIL',
                        payload: {
                            src: el
                        }
                    })
                }}></Img></Link>)}
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
`;

export default Gallery

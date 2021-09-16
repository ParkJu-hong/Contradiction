import React, {useState, useEffect}from 'react';
import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';

function Gallery() {
    let forCleanUp = true;
    const [pictures, setPictures] = useState([])
    const [viewDetail, setViewDetail] = useState(false);
    useEffect(()=>{
        if(forCleanUp){
            setPictures(picturesUrl);
        }
    },[])
    return (
        <Div>
            {!viewDetail ? pictures.map((el, idx)=><div key={idx}>
                <Img src={el} onClick={()=>{
                    setViewDetail(!viewDetail);
                }}></Img></div>) : 'hi'}
        </Div>
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

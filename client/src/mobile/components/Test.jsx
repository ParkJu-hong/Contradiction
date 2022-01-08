import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import picturesUrl from '../../dummyData/dummyPictures';
import Menubar from './Menubar';
import MenuView from './MenuView';
import ViewDetail from './ViewDetail';
import axios from 'axios';

function Test() {
    const [pictures, setPictures] = useState([]);
    const [isPictureSelected, setIsPictureSelected] = useState(false);

    useEffect(async ()=>{
        const result = await axios.get('http://localhost:3001/gallery/spring/read');
        console.log('result : ', result.data.arrTemp);
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Test

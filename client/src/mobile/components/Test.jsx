import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';


function Test() {
    const [pictures, setPictures] = useState([]);
    const [isPictureSelected, setIsPictureSelected] = useState(false);

    useEffect(async ()=>{
        const result = await axios.get('http://localhost:3001/gallery/spring/read');
        console.log('result : ', result);
    }, [])

    return (
        <div>
            <Gallery season={'spring'}></Gallery>
        </div>
    )
}

export default Test

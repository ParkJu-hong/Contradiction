import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


export default function ViewDetail() {
    

    const seletedPictureUrl = useSelector((state) => state.reducerViewDetail.seletedPicture);
    console.log('seletedPictureUrl : ', seletedPictureUrl);

    let history = useHistory();

    return (
        <>
            <Icon><FontAwesomeIcon icon={faTimes} onClick={() => {
                // 뒤로 갈 수 있도록 함. => useHistory 사용할 것
                history.push("/gallery");
            }}></FontAwesomeIcon></Icon>
            <br></br>
            <Div>
                <Img src={seletedPictureUrl.src} />
            </Div>
            <Div>{seletedPictureUrl.title}</Div>
            <Div>{seletedPictureUrl.comment}</Div>
        </>
    )
}
const Div = styled.div`
    text-align: center;
`;
const Icon = styled.div`
    text-align: right;
    margin: 20px;
`;
const Img = styled.img`
    /* padding: 25px; */
    width: 70%;
    height: 30%;
`;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


export default function ViewDetail() {
    const dispatch = useDispatch();
    const seletedPictureUrl = useSelector((state) => state.reducerViewDetail.seletedPicture);
    console.log('seletedPictureUrl : ', seletedPictureUrl);

    let history = useHistory();

    return (
        <>
            <Div><FontAwesomeIcon icon={faTimes} onClick={() => {
                // 뒤로 갈 수 있도록 함. => useHistory 사용할 것
                history.push("/gallery");
            }}></FontAwesomeIcon></Div>
            <Div>
                <Img src={seletedPictureUrl} />
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

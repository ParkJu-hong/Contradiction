import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router-dom';
import { Motion, spring } from 'react-motion';


export default function ViewDetail({ closeDetail }) {

    const seletedPictureUrl = useSelector((state) => state.reducerViewDetail.seletedPicture);
    // let history = useHistory();

    return (
        <>
            <Motion
                // defaultStyle={{ x: 0, opacity: 0 }}
                // style={{ x: spring(-200), opacity: spring(1) }}
                defaultStyle={{ x: -200, opacity: 0 }}
                style={{ x: spring(0), opacity: spring(1) }}
            >
                {(style) => (
                    <>
                        {console.log('style.opacity : ', style.opacity)}
                        <Icon><FontAwesomeIcon icon={faTimes} onClick={() => {
                            // 뒤로 갈 수 있도록 함. => useHistory 사용할 것
                            closeDetail(false);
                            return;
                        }}></FontAwesomeIcon></Icon>
                        <br></br>
                        <Div><Img style={{ opacity: style.opacity }} src={seletedPictureUrl.src} /></Div>
                        <Div>{seletedPictureUrl.title}</Div>
                        <Div>{seletedPictureUrl.comment}</Div>
                    </>
                )}
            </Motion>
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

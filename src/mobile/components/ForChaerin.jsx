import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

export default function ForChaerin() {
    const menus = useSelector((state) => state.reducerMenu.menus);

    return (
        <>
            {/* <Img src="./img/headerImg.png"></Img> */}
                <H1>관리자 페이지입니다.</H1>
                <br></br>
                {menus.map((el, idx) => <><Div key={idx}>{el}</Div><br></br></>)}
            
        </>
    )
}
const Img = styled.img`
    width: 50%;
`;

const H1 = styled.h1`
    text-align: center;
`;

const Div = styled.div`
    text-align: center;
`;

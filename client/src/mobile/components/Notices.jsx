import React from 'react';
import styled from 'styled-components';
import Menubar from './Menubar';

function Notices() {
    return (
        <>
                <Menubar />
                <br></br><br></br><br></br><br></br><br></br>
                <Div>
                    공지사항입니다.
                </Div> 
        </>
    )
}
const Div = styled.div`
    text-align: center;
`;
export default Notices

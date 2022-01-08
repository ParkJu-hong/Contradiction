import React, { useState } from 'react'
import styled from 'styled-components';
import Create from './CRUD/Create';

function Springforajax() {
    // s3에 있는 사진들 텍스트로 렌더링하고 추가할 것 추가하고 뺄 것 뺴는 식으로 렌더링하자
    // 그럴려면 서버에서 텍스트를 response해줘야함.
    const [choose, setChoose] = useState(null);

    return (
        <Main>
            {choose === null ? <> 
            <H3 onClick={() => {
                setChoose(<Create season='spring'></Create>)
            }}>Create</H3>
                <H3>Delete</H3>
                <H3>Update</H3> </> : <>{choose}</>}

        </Main>
    )
}

export default Springforajax
const Main = styled.div`
    text-align: center;
`;

const H3 = styled.h3`
    margin: 30px;
`

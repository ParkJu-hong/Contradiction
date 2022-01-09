import React, { useState } from 'react'
import styled from 'styled-components';
import Create from './CRUD/Create';

export default function Summerforajax() {
    const [choose, setChoose] = useState(null);
    return (
        <Main>
            {choose === null ? <> 
            <H3 onClick={() => {
                setChoose(<Create season='summer'></Create>)
            }}>Create</H3>
                <H3>Delete</H3>
                <H3>Update</H3> </> : <>{choose}</>}

        </Main>
    )
}
const Main = styled.div`
    text-align: center;
`;

const H3 = styled.h3`
    margin: 30px;
`
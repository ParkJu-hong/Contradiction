import React from 'react'
import styled from 'styled-components';

export default function Comment({ name, comment}) {
    return (
        <>
            <Div>{name}</Div>
            <Div>{comment}</Div>
            <br></br>
        </>
    )
}

const Div = styled.div`
    text-align: center;
`;

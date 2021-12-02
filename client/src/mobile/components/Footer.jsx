import React from 'react';
import styled from "styled-components";

function Footer() {
    return (
        <Div>
            Contact : crfaceit@gmail.com
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    /* 
        이게 뭔지 확인해볼 것
        https://studiomeal.com/archives/197
        flex-flow: row nowrap;
    */
    align-items: flex-end;
`;

export default Footer

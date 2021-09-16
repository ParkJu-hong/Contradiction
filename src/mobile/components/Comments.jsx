import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import dummyComments from '../../dummyData/dummyComments';
import Comment from './Comment';

function Comments() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    let forCleanUp = true;
    useEffect(()=>{
        if(forCleanUp){
            setComments(dummyComments)
        }
        return ()=>{
            forCleanUp = false;
        }
    },[])
    return (
        <Div>
           {comments.map((el) => {
               return <Comment key={el.id} name={el.name} comment={el.comment}/>
           })}

            <Div>성명</Div>
            <Input type="text" ></Input>
            <Div>내용</Div>
            <Input type="text" ></Input>
            <Div><Button>Comment!</Button></Div>
        </Div>
    )
}

const Div = styled.div`
    text-align: center;
`;
const Input = styled.input`
    width: 40%;
`
const Button = styled.button`

`;

export default Comments

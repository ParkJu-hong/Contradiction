import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Create({ season }) {
    const [imgBase64, setImgBase64] = useState([]); // 파일 base64 미리보기
    const [imgFile, setImgFile] = useState(null);	//파일

    useEffect(() => {
        { console.log('imgBase64 : ', imgBase64) }
    }, [imgBase64])

    function zerocho(event) {
        console.log(event.target.files);

        const xhr = new XMLHttpRequest();
        const fd = new FormData();

        fd.append('img', imgFile);

        xhr.onload = function () {
            console.log('순차적으로 바뀌는 xhr.status : ', xhr.status);
            if (xhr.status === 200 || xhr.status === 201) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.responseText);
            }
        }
        xhr.open('POST', `http://localhost:3001/gallery/${season}/create`)
        xhr.send(fd);
    }

    function zerochoInput(event) {
        setImgFile(event.target.files[0]);
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            const base64 = reader.result;
            // console.log('reader.result : ', reader.result);
            if (base64) {
                let base64Sub = base64.toString();
                // console.log('base64.toString(); : ', base64.toString());
                setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
            }
        }
    }

    return (
        <Main>
            {imgBase64.length !== 0 ?
                <img
                    src={imgBase64}
                    style={{ width: '50vw', height: '20vh' }}
                ></img>
                :
                <div style={{
                    width: '50vw',
                    height: '20vh',
                    border: 'solid 2px #1E90FF',
                    borderRadius: '5px',
                    marginLeft: '5vw'
                }}></div>
            }
            <h1>이미지 추가란</h1>
            <input type="file" id="file" onChange={zerochoInput} multiple="multiple" />
            <button
                onClick={zerocho}
                style={{
                }}
            >작성완료</button>
            <h1>제목</h1>
            <input
                type="text"
                style={{
                    // flex: 0,
                    width: '40vw',
                    border: 'solid 2px #1E90FF',
                    borderRadius: '5px',
                    margin: '10px'
                }}></input>
            <h1>내용</h1>
            <textarea
                placeholder="내용을 입력해 주세요."
                name="content"
                rows="100px"
                style={{
                    width: '50vw',
                    height: '30vh',
                    resize: 'none',
                    border: 'solid 2px #1E90FF',
                    borderRadius: '5px'

                }}
            ></textarea>
        </Main>
    )
}

export default Create

const Main = styled.div`
    text-align: center;
    margin: 100px;
`
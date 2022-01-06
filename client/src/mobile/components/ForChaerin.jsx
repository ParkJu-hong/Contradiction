import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Springforajax from './ajaxForGallery/Springforajax';
import Summerforajax from './ajaxForGallery/Summerforajax';
import Autumnforajax from './ajaxForGallery/Autumnforajax';
import Winterforajax from './ajaxForGallery/Winterforajax';
import Pointforajax from './ajaxForGallery/Pointforajax';

export default function ForChaerin() {
    const menus = useSelector((state) => state.reducerMenu.galleryMenus);
    const seletedComponetforajax = useSelector((state) => state.reducerForAjax.seletedComponetforajax);

    const dispatch = useDispatch();
    const [choose, setChoose] = useState(<></>);

    useEffect(()=>{
        chooseComponent(seletedComponetforajax);
        console.log('seletedComponetforajax : ', seletedComponetforajax);
    },[seletedComponetforajax])

    function chooseComponent(_choose){
        if(_choose === 'Summerforajax'){
            setChoose(<Summerforajax/>)
        }else if(_choose === 'Springforajax'){
            setChoose(<Springforajax/>)
        }else if(_choose === 'Autumnforajax'){
            setChoose(<Autumnforajax/>)
        }else if(_choose === 'Winterforajax'){
            setChoose(<Winterforajax/>)
        }else if(_choose === 'Pointforajax'){
            setChoose(<Pointforajax/>)
        }
    }
    

    return (
        <Main>
            {seletedComponetforajax === null ? <>
                <h1>관리자 페이지입니다.</h1>
                <br></br>
                {menus.map((el) => {
                    return <Menu
                        key={el.id}
                        className={el.title.toUpperCase()}
                        onClick={() => {
                            let temp = el.title.toUpperCase()
                            console.log('temp : ', temp);
                            dispatch({
                                type: temp
                            })
                        }}
                    >{el.title}</Menu>
                })}
            </> : <>
            {choose}
            </>}

        </Main>
    )
}

const Main = styled.div`
    text-align: center;
`;

const Menu = styled.h3`
    margin: 30px;
`

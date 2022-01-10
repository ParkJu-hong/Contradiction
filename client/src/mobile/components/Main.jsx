import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import MainPage from './MainPage';
import Gallery from './Gallery';
import About from './About';
// import Comments from './Comments';
import ForChaerin from './ForChaerin';

function Main() {

    return (
        <>
            <Switch >
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/spring">
                <Gallery season={'spring'}/>
                </Route>
                <Route path="/summer">
                <Gallery season={'summer'}/>
                </Route>
                <Route path="/autumn">
                    <Gallery season={'autumn'}/>
                </Route>
                <Route path="/winter">
                <Gallery season={'winter'}/>
                </Route>
                <Route path="/point">
                <Gallery season={'point'}/>
                </Route>
                <Route path="/About">
                    <About text='about'/>
                </Route>
                <Route path="/Contact">
                    <About text='crfaceit@gmail.com'/>
                </Route>
                <Route path="/Shop">
                    <About text='shop'/>
                </Route>
                <Route path='/forchaerin'>
                    <ForChaerin />
                </Route>

                {/* <Route path="/comments">
                    <Comments />
                </Route> */}
            </Switch>
        </>
    )
}

export default Main

/*
            {id: 1, title: 'About'},
        {id: 2, title: 'Gallery'},
        {id: 3, title: 'Shop'},
        {id: 4, title: 'Contact'}
*/
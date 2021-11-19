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
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/about">
                    <About />
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

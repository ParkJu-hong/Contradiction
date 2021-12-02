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
                    <Gallery category='spring' />
                </Route>
                <Route path="/summer">
                    <Gallery category='summer' />
                </Route>
                <Route path="/autumn">
                    <Gallery category='autumn' />
                </Route>
                <Route path="/winter">
                    <Gallery category='winter' />
                </Route>
                <Route path="/point">
                    <Gallery category='point' />
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

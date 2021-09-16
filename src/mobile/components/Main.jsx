import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Menubar from './Menubar';
import MainPage from './MainPage';
import Gallery from './Gallery';
import About from './About';
import Comments from './Comments';

function Main() {
    return (
        <>
            <Menubar />
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                {/* <Route path="/comments">
                    <Comments />
                </Route> */}
            </Switch>
        </>
    )
}

export default Main

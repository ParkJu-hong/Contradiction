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
import ViewDetail from './ViewDetail';
import Comments from './Comments';
import Notices from './Notices';
import ForChaerin from './ForChaerin';

function Main() {
    return (
        <>
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
                <Route path="/viewdetail">
                    <ViewDetail />
                </Route>
                <Route path="/faBell">
                    <Notices />
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

import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import MainPage from './MainPage';
import Gallery from './Gallery';
import About from './About';
import ViewDetail from './ViewDetail';
// import Comments from './Comments';
import Notices from './Notices';
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

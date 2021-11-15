import React from 'react';
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Transition.css";

import MainPage from './MainPage';
import Gallery from './Gallery';
import About from './About';
import ViewDetail from './ViewDetail';
// import Comments from './Comments';
import Notices from './Notices';
import ForChaerin from './ForChaerin';

function Main() {

    const location = useLocation();

    return (
        <>
            <TransitionGroup className="transition-group">
                <CSSTransition key={location.pathname} classNames="fade" timeout={2000}>
                    <Switch location={location}>
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
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default Main

import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Menubar from './Menubar';
import MainPage from './MainPage';

function Main() {
    return (
        <>
            <Menubar />
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
            </Switch>
        </>
    )
}

export default Main

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

function Main() {
    const [menubar, setMenubar] = useState(false);

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

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Guac from "./pages/guac";


export default function RouterConfig() {

    /*Here we define the route path and its corresponding components*/
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={index}/>
                <Route path="/guac" component={Guac}/>
            </Switch>
        </BrowserRouter>
    );
}
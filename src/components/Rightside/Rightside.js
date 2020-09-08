import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import AddTask from './AddTask/AddTask';

export default function rightside (props) {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/edit">
                <AddTask />
            </Route>
        </Switch>
    );
};
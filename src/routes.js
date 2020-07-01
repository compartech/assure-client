import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SearchPage from './pages/SearchPage.js';

const BaseRouter = () => (
    <Switch>
        <Route exact path='/search'>
            <SearchPage />
        </Route>
        <Route exact path='/'>
            <HomePage />
        </Route>
    </Switch>
);

export default BaseRouter;
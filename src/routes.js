import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SearchPage from './pages/SearchPage.js';
    
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={HomePage}/>   
        <Route exact path='/search' component={SearchPage}/>   
    </div>
);

export default BaseRouter;
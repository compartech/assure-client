import React from 'react';
import { Route } from 'react-router-dom';
import SearchResultsGrid from './containers/SearchResultsGrid.js';
    
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={SearchResultsGrid}/>   
        <Route exact path='/:resultID' component={SearchResultsGrid}/>   
    </div>
);

export default BaseRouter;
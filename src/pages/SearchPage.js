import React from 'react';

import MainAppBar from '../components/MainAppBar.js';
import SearchResultsGrid from '../containers/SearchResultsGrid.js';
    
function SearchPage() {

  return (
    <div>
        <MainAppBar />
       
        <SearchResultsGrid />
    </div>
  );
}

export default SearchPage;

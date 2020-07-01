import React from 'react';

export default React.createContext({
    results: [],
    setResults: () => { },
    hilights : [],
    setHilights: () => { },
    addSearchResult : () => { },
    searchText : "", 
    setSearchText : () => { },
});
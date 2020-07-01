import React, { useState, useEffect } from 'react';

import AssureContext from './assure-context';

import ListHilights from '../data/ListHilights.js';
import ListResults from '../data/ListResults.js';

const GlobalState = (props) => {
    /**
     * @dev State variables
     */
    const [results, setResults] = useState(ListResults);
    const [hilights, setHilights] = useState(ListHilights);
    const [searchText, setSearchText] = useState('');

    /**
     * @dev UseEffect
     */

    useEffect(() => {

    }, []);

    /**
     * @dev addSearchResult
     */

    const addSearchResult = async (searchText) => {

        if (searchText === "") {
            setResults(ListResults);
        }
        else {
            setResults(results => {
                let text = searchText.toLowerCase();
                const list = ListResults.filter((result) => result.company.toLowerCase().indexOf(text) > -1);
                return list;
            });    
        }//else
    }

    /**
     * Render function
     */

    return (
        <AssureContext.Provider value={{
            results,
            setResults,
            hilights,
            setHilights,
            addSearchResult,
            searchText, 
            setSearchText,
        }}>
            {props.children}

        </AssureContext.Provider>
    );
}

export default GlobalState;
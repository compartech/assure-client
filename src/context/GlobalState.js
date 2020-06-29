import React, { useState, useEffect } from 'react';

import AssureContext from './assure-context';


const listResults = [{
    company: 'SAA',
    insuranceType: ['Automobile', 'Housing', 'Person'],
    price: '20.000'
},
{
    company: 'AXA',
    insuranceType: ['Automobile', 'Housing'],
    price: '50.000'
}];

const GlobalState = (props) => {
    /**
     * @dev State variables
     */
    const [results, setResults] = useState(listResults);

    /**
     * @dev UseEffect
     */

    useEffect(() => {

    }, []);

    /**
     * @dev addSearchResult
     */

    const addSearchResult = async (searchText) => {

        const searchResult = {
            company: searchText,
            insuranceType: ['Automobile', 'Housing'],
            price: '50.000'
        };

        setResults(results => {
            const list = [...results, searchResult];
            return list;
        });
    }

    /**
     * Render function
     */

    return (
        <AssureContext.Provider value={{
            results,
            setResults,
            addSearchResult,
        }}>
            {props.children}

        </AssureContext.Provider>
    );
}

export default GlobalState;
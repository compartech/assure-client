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
},
{
    company: 'CAAT',
    insuranceType: ['Automobile', 'Housing'],
    price: '90.000'
}];

const hilightsList = [{
    company: 'SAA',
    announcement: "Annoucement SAA",
    link : "/",
    image : "/images/insurance-health.jpg"
},
{
    company: 'AXA',
    announcement: "Annoucement AXA",
    link : "/",
    image : "/images/insurance-business.jpg"
}];

const GlobalState = (props) => {
    /**
     * @dev State variables
     */
    const [results, setResults] = useState(listResults);
    const [hilights, setHilights] = useState(hilightsList);
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
            setResults(listResults);
        }
        else {
            setResults(results => {
                let text = searchText.toLowerCase();
                const list = listResults.filter((result) => result.company.toLowerCase().indexOf(text) > -1);
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
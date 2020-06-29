import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchResultPanel from '../components/SearchResultPanel.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding : 10
  }
}));

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


export default function SearchResultsGrid(props) {
  const [results, setResults] = useState(listResults);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {results.map((result) => (
            <Grid item xs={12} key ={result.price}>
                  <SearchResultPanel result={result}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

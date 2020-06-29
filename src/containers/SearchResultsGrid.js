import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchResultPanel from '../components/SearchResultPanel.js';

import AssureContext from '../context/assure-context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding : 10
  }
}));

export default function SearchResultsGrid(props) {
  const classes = useStyles();

  const context = useContext(AssureContext);


  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {context.results.map((result) => (
            <Grid item xs={12} key ={result.price}>
                  <SearchResultPanel result={result}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

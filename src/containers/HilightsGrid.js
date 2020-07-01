import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HilightCard from '../components/HilightCard.js';

import AssureContext from '../context/assure-context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding : 10
  }
}));

export default function HilightsGrid(props) {
  const classes = useStyles();

  const context = useContext(AssureContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {context.hilights.map((hilight) => (
            <Grid item xs={12} md={6} key ={hilight.company}>
                  <HilightCard content={hilight}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AssureContext from '../context/assure-context';
import InsuranceTypeList from '../components/InsuranceTypeList.js';
import InsuranceCompaniesList from '../components/InsuranceCompaniesList.js';
import PriceRangeSlider from '../components/PriceRangeSlider.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10
  }
}));

export default function SearchParamsGrid(props) {
  const classes = useStyles();

  const context = useContext(AssureContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <PriceRangeSlider />
        </Grid>
        <Grid item xs={12}>
          <InsuranceTypeList />
        </Grid>
        <Grid item xs={12}>
          <InsuranceCompaniesList />
        </Grid>
      </Grid>
    </div>
  );
}

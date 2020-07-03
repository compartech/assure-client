import React from 'react';
import Grid from '@material-ui/core/Grid';

import MainAppBar from '../components/MainAppBar.js';
import SearchResultsGrid from '../containers/SearchResultsGrid.js';
import SearchParamsGrid from '../containers/SearchParamsGrid.js';

function SearchPage() {

  return (
    <div>
      <MainAppBar />
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <SearchParamsGrid />
        </Grid>
        <Grid item xs={12} md={9}>
          <SearchResultsGrid />
        </Grid>
      </Grid>

    </div>
  );
}

export default SearchPage;

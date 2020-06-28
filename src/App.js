import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// import logo from './logo.svg';
import logo from './logo-coccinelle.png';
import './App.css';
import MainAppBar from './components/MainAppBar.js';
import MainSearchInput from './components/MainSearchInput.js';
import SearchResultsGrid from './containers/SearchResultsGrid.js';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
        
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <MainAppBar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Insurance comparison for : <code> Automobile / Housing / .... </code>
        </p>
        <Paper className={classes.paper} elevation={3}>
        <MainSearchInput />
      </Paper>
      </header>
      <SearchResultsGrid />
    </div>
  );
}

export default App;

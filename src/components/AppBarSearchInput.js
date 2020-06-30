import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import AssureContext from '../context/assure-context';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    backgroundColor: 'rgba(0, 0, 0, .03)',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

export default function AppBarSearchInput() {
  const classes = useStyles();
  const context = useContext(AssureContext);
  const history = useHistory();

  const handleSearch = () => {
    history.push('/search');
    context.addSearchResult(context.searchText);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </div>
      <InputBase
        placeholder= {context.searchText === "" ? "Insurance company ?" : context.searchText}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        onChange={(e) => context.setSearchText(e.target.value)}
      />
    </div>
  );
}

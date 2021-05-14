import { createStyles, fade, FormControl, Grid, InputBase, makeStyles, Theme, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import '../css/App.css';
import { useHistory } from 'react-router-dom';


interface searchProps {
  addToGrid: (searchResults: tile[])=> void
}

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      borderRadius: "10%/50%",
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      margin: '4rem',
      marginTop: '1rem',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        'Roboto'
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }),
)(InputBase);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '4rem'
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);


function SearchBar(props:searchProps) {
  const history = useHistory();
  const classes = useStyles();
  const [tileData, setTileData] = useState([]);
  const [searchBarText, setSearchBarText] = useState<string>('');
  var addToGrid = props.addToGrid;

  useEffect(() => {
    async function search() {
      if (searchBarText.length !=0 && searchBarText.length % 2 == 0) {
        const searchURL = new URL("https://quizical.tabishimran.com/api/search")
        const params = new URLSearchParams();
        params.append('key', searchBarText);
        searchURL.search = params.toString();
        const response = await fetch(searchURL.toString());
        if (response.status == 401) {
          history.push('/login');
        }
        else {
          const data = await response.json();
          addToGrid(data);
        }
      }
    }
    search();
  }, [searchBarText])

  return (
    <div className="searchBar">
      <form className={classes.root} noValidate>
        <FormControl className={classes.margin}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5" style={{ color: "white", marginTop: '1rem' }} > Pick an artist</Typography>
            </Grid>
            <Grid item xs={12}>
              <BootstrapInput id="bootstrap-input" onSubmit={(e)=>e.preventDefault()} onChange={(e) => {
                setSearchBarText(e.target.value);
              }}>

              </BootstrapInput>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
}

export default SearchBar;
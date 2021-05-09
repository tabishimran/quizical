import { createStyles, fade, FormControl, Grid, InputBase, makeStyles, Theme, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import '../css/App.css';

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
      borderRadius:"10%/50%",
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      margin: '4rem',
      marginTop:'1rem',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
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


function SearchBar(){

    const classes = useStyles();

    return(
        <div className="searchBar">
            <form className={classes.root} noValidate>
                <FormControl className={classes.margin}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12}>
                          <Typography variant="h5" style={{color:"white",marginTop:'1rem'}} > Pick an artist</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <BootstrapInput id="bootstrap-input"></BootstrapInput>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </div>
    );
}

export default SearchBar;
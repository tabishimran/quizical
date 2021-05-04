import { createStyles, fade, FormControl, Grid, InputBase, makeStyles, Theme, withStyles } from '@material-ui/core';
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
                    <Grid container justify="center">
                        <Grid item>
                            <BootstrapInput id="bootstrap-input"></BootstrapInput>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </div>
    );
}

export default SearchBar;
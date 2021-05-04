import { Divider, Grid, Typography } from "@material-ui/core";
import '../css/App.css';
import WordCloud from '../components/WordCloud';
import SearchBar from '../components/SearchBar';

function Search(){
    return(
        <div className="container">
        <div className="view">
          <Grid
            container 
            justify="center" 
            alignItems="center" 
            style={{textAlign:"center",height:'100%'}} 
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" style={{color:"white",marginTop:'6rem'}} > Pick an artist</Typography>
            </Grid>
            <Grid item>
              <SearchBar></SearchBar>
            </Grid>
            <Divider orientation="horizontal" style={{color:"white"}}></Divider>
            <Grid item xs={12}>
              <WordCloud></WordCloud>
            </Grid>
          </Grid>
          </div>
      </div>  
    );
}

export default Search;
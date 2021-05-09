import { Divider, Grid, Typography } from "@material-ui/core";
import '../css/App.css';
import SearchBar from '../components/SearchBar';
import ImageGrid from "../components/ImageGrid";

function Search() {
  return (
    <div className="container">
      <div className="view">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ textAlign: "center" }}
          direction="row"
          wrap="wrap"
        >
          <Grid item>
            <SearchBar></SearchBar>
          </Grid>
          {/* <div className="scrollable"> */}
            <Grid item style={{overflowY:"auto",height:"1024px "}}>
              <ImageGrid ></ImageGrid>
            </Grid>
          {/* </div> */}
        </Grid>
      </div>
    </div>
  );
}

export default Search;
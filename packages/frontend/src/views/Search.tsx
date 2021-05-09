import { Grid } from "@material-ui/core";
import '../css/App.css';
import SearchBar from '../components/SearchBar';
import ImageGrid from "../components/ImageGrid";
import NavBar from "../components/NavBar";

function Search() {
  return (
    <div>
      <NavBar></NavBar>
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
    </div>
  );
}

export default Search;
import { Grid } from "@material-ui/core";
import '../css/App.css';
import SearchBar from '../components/SearchBar';
import ImageGrid from "../components/ImageGrid";
import NavBar from "../components/NavBar";
import { useState } from "react";

function Search() {

  const [grid,setGridData] = useState<tile[]>([]);

  function addToGrid(searchResults:tile[]){
    var currentList = grid;
    currentList = currentList.filter(function(each){return !searchResults.some(elem=>elem.uri==each.uri)})
    var data = searchResults.concat(currentList);
    setGridData(data);
  }

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
            <SearchBar addToGrid={addToGrid}></SearchBar>
          </Grid>
            <Grid item style={{overflowY:"auto",height:"100vh"}}>
              <ImageGrid grid={grid} setGrid={setGridData}></ImageGrid>
            </Grid>
        </Grid>
      </div>
    </div>
    </div>
  );
}

export default Search;
import { Card, CardActionArea, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";


function Options(){
    const options=[{"id":1,"name":"Gone by russ"},{"id":1,"name":"Layers by NF"},{"id":1,"name":"Peaches by Justin Bieber"},{"id":1,"name":"Bicycle by Queen"}];
    return(
      <div className="options">
          <Grid container direction="column">
            {options.map((song) =>(
                    <Grid item style={{margin:"1rem"}}>
                            <Card style={{backgroundColor:"#2f2929"}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="body1" style={{"color":"white"}}>
                                        {song.name}
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </Grid>
                ))};
          </Grid>
      </div>  
    );
}

export default Options;
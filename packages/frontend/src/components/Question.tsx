import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import '../css/App.css';

function Question(){
    const question="Which song is this›?";
    return(
        <div className="question">
            <Grid 
                container
                direction="column"
            >
                <Grid item>
                    <Typography 
                        variant="body1"
                        style={{
                            color:"white",
                            fontSize:"2vh"
                        }}
                    >
                        {question}
                    </Typography>
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </div>
    );
}

export default Question;
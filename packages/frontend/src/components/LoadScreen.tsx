import { CircularProgress, Grid, Typography, useTheme } from '@material-ui/core'
import React from 'react'

function LoadingScreen() {
    const theme = useTheme();
    return (
        <div>
            <Grid direction="column">
                <Grid item>
                    <CircularProgress size="5rem" />
                </Grid>
                <Grid item style={{marginTop:"2rem"}}>
                    <Typography variant="h4" style={{ color: "white",fontSize:"1.5rem"}}>Generating Quiz</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoadingScreen

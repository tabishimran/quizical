import { CircularProgress, Grid, Typography } from '@material-ui/core'

function LoadingScreen() {
    return (
        <div>
            <Grid direction="column">
                <Grid item>
                    <CircularProgress size="5rem" />
                </Grid>
                <Grid item style={{ marginTop: "2rem" }}>
                    <Typography variant="h4" style={{ color: "white", fontSize: "1.5rem" }}>Generating Quiz</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoadingScreen

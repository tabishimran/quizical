import React from 'react';
import '../css/App.css';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';


function Login() {
  async function auth() {
    window.location.href = 'https://quizical.tabishimran.com/api/login';
  }

  return (
    <div className="Login">
      <div className="App-header">
        <Grid container justify="center" alignItems="center" style={{ textAlign: "center" }} direction="column">
          <Grid item xs={12} style={{ margin: "2rem", marginBottom: "4rem" }}>
            <Typography variant="h1">Quizical</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" color="primary" onClick={auth} style={{ color: "white", marginTop: "4rem", borderRadius: "10%/50%" }}>
              Connect with Spotify
          </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;

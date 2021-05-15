import '../css/App.css'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';


function NavBar(){
    return(
        <AppBar position="relative" style={{backgroundColor:"#191414"}}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon style={{color:"white"}}/>
          </IconButton>
          <Typography variant="h3" style={{color:"white", fontSize:"1.5rem"}}>
            Quizical
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;
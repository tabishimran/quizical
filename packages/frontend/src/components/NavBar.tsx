import '../css/App.css'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';


function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="absolute" style={{ backgroundColor: "#191414" }}>
      <Toolbar>
        <div onClick={handleClick}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <Typography variant="h3" style={{ color: "white", fontSize: "1.5rem" }}>
          Quizical
          </Typography>
      </Toolbar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Leaderboard</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar;
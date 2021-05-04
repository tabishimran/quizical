import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/App.css';
import Search from './Search';
import Quiz from './Quiz'
function Main() {
  return (
    <div className="Main">
      <AppBar position="absolute" style={{backgroundColor:"#191414"}}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon style={{color:"white"}}/>
          </IconButton>
          <Typography variant="h3" style={{color:"white", fontSize:"1.5rem"}}>
            Quizical
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Search></Search> */}
      <Quiz></Quiz>
    </div>
  );
}

export default Main;
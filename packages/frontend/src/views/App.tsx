import React from 'react';
import '../css/App.css';
import Login from './Login';
import Search from './Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Quiz from './Quiz';
import QuizComplete from './QuizComplete'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954'
    },
    secondary: {
      main: '#191414'
    }
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path={'/quiz/:artistUri'} component={Quiz}></Route>
            <Route path='/complete' component={QuizComplete}></Route>
            <Route path='/error/:type' component={Search}></Route>
            <Route path='/' component={Search}></Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Navbar/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

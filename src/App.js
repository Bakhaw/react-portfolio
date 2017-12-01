import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <BackgroundVideo />
          <Navbar/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

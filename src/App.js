import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';

//Responsive

import Responsive from 'react-responsive';

const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
const Tablet  = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
const Mobile  = ({ children }) => <Responsive maxWidth={768} children={children} />;
const Default = ({ children }) => <Responsive minWidth={768} children={children} />;

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

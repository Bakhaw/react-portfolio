import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SwipeableViews from 'react-swipeable-views';
import Home from './Home';
import Form from './Form';
import GridList from './GridList';

const muiTheme = getMuiTheme({
    tabs: {backgroundColor: 'rgb(156, 175, 160)'},
    tab: {color: 'black'},
});

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {padding: 10}
};

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    return (
      <div>
        <Tabs className="navigation" tabItemContainerStyle={muiTheme.tabs} onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab buttonStyle={muiTheme.tab} label="Accueil" value={0}/>
          <Tab buttonStyle={muiTheme.tab} label="Portfolio" value={1}/>
          <Tab buttonStyle={muiTheme.tab} label="Contact" value={2}/>
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <Home />
          <GridList />
          <Form />
        </SwipeableViews>
      </div>
    );
  }
}

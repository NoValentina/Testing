import React, { Component } from 'react';
import './App.css';

import Navigation from './navigation';

class App extends Component {
  state = {
    tab: 'people', // projects
  }

  changeTab() {
    const newTab = this.state.tab === 'projects' ? 'people' : 'projects'

    this.setState({tab: newTab});
  }

  render() {
    console.log(this.state.tab,'app')
    return (
      <Navigation tab={this.state.tab} changeTab={() => this.changeTab()} />
    );
  }
}

export default App;

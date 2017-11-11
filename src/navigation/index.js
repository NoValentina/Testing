import React, { Component } from 'react';

import './style.css';
import Menu from './menu';

class Navigation extends Component {
  render() {
    console.log(this.props.tab,'nav')
    return (
      <div className="Navigation">
        <Menu tab={this.props.tab} changeTab={this.props.changeTab} />
      </div>
    )
  }
}

export default Navigation;

import React, { Component } from 'react';

import './style.css'

class Menu extends Component {
  render() {
    console.log(this.props.tab, 'gfgd')
    return (
      <div className="menu">
        <button className={this.props.tab === 'projects' ? 'menuActive' : 'menuBtn'} onClick={this.props.changeTab}>Проекты</button>
        <button className={this.props.tab === 'people' ? 'menuActive' : 'menuBtn'} onClick={this.props.changeTab}>Люди</button>
      </div>
    )
  }
}

export default Menu;

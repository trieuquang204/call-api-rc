import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call api</a>
        <ul className="nav navbar-nav">
          <li><a>Trang chu</a></li>
          <li><a>quan ly san pham</a></li>
        </ul>
      </div>
    )
  }
}

export default Menu;
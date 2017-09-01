import React, { Component } from 'react';
import logo from "../../assets/images/Logo.png";

class Header extends Component {

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo}></img>
        <p>Welcome Guest</p>
      </div>
    )
  }
}
export default Header;

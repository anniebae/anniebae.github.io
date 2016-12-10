import React, { Component } from 'react';
import logo from '../../old_files/img/IMG_6223.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Annie Bae</h2>
        </div>
      </div>
    );
  }
}

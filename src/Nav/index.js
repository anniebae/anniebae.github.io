import React, { Component } from 'react'
import Link from 'react-router/Link'
import './styles.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul id="navbar">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </div>
    );
  }
}

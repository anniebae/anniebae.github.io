import React, { Component } from 'react'
import { HashRouter, Match, Miss } from 'react-router'
import './styles.css'
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Nav from '../Nav'

const FourOhFour = props => <div>Please leave.</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Nav />
            <Match pattern='/' exactly component={Home} />
            <Match pattern='/about' component={About} />
            <Match pattern='/projects' component={Projects}></Match>
            <Miss component={FourOhFour} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App

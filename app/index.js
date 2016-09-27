import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Styles from '../css/styles.css'
import Home from 'components/Home';
import About from 'components/About';
import Work from 'components/Work';

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='work' component={Work} />
    </Route>
  </Router>,
	document.getElementById('app')
)
import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Styles from '../../css/styles.css'
import Home from 'components/Home';
import About from 'components/About';
import Work from 'components/Work';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <Route path='about' component={About} />
      <Route path='work' component={Work} />
    </Route>
  </Router>
)

export default routes;
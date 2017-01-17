import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'jquery';
import 'fullscreen-api-polyfill';

import App from './components/App';
import Home from './components/Home';
import RoboticaIA from './components/RoboticaIA';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="robotica-ia" mapMenuTitle="Robótica - IA" component={RoboticaIA} />

    <Route path="*" mapMenuTitle="Page Not Found">
      <IndexRoute component={PageNotFound} />
    </Route>
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);

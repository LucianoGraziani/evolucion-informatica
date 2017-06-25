import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'jquery';
import 'fullscreen-api-polyfill';

import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import TimelineJS from './components/TimelineJS';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path="/evolucion-informatica/" component={App}>
    <IndexRoute component={Home} />

    <Route
      path="full-history"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/122mAus-xBG4gjKiZnJjuQfFP7oyujBIRQj1FHe53V90/pubhtml"
        />
      }
    />
    <Route
      path="simple-history"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1Tss5KSD2geQ9cc4lRQe_0_XDn3Lc6XN7S3AUUI3BUGs/pubhtml"
        />
      }
    />
    <Route
      path="robotic-ai"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1qMes6fK0yVojJtiGmYLTgF1EE-wMWR35PaZjeFRUW0A/pubhtml"
        />
      }
    />
    <Route
      path="crypto"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1ypUXQ54-Ux8FzKA5vzAJgPKdfsRb8rDLWLxm_UHSe0k/pubhtml"
        />
      }
    <Route
      path="bi"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1M3AY9l4cAJBwoARx6q6rpqLlpOs1HqBmwpbwHUCkE9A/pubhtml"
        />
      }
    />
    <Route
      path="ddbb"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1rJWqiSpjttS7iW_MexX_rcYIlN1PFYakpe8WXwhPRJY/pubhtml"
        />
      }
    />
    <Route
      path="business"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1vFUTQeuQZc0PnuCpXGFnQd1UZK_UTyBSAmrxAYU1b10/pubhtml"
        />
      }
    />
    <Route
      path="e-comunications"
      component={() =>
        <TimelineJS
          timelineUrl="https://docs.google.com/spreadsheets/d/1MKGZvP-BJSYru3ZM79SlXyg0ZzjC7o7hxQGRlScYSSg/pubhtml"
        />
      }
    />

    <Route path="about" component={About} />

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

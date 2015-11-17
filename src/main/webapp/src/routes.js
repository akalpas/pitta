import React from 'react';
import { Route } from 'react-router';
import * as containers from './containers';


const {
	App,
  	EventsList
} = containers;


export default (
  <Route name='app' component={App}>
    <Route name='events' path="/" component={EventsList} />
  </Route>
);

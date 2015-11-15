import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  List
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={List} />
  </Route>
);

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import { store } from '../store/Store';

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={props => (
   store.getState('ACTIVATE_GEOD').login.value  ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute ;

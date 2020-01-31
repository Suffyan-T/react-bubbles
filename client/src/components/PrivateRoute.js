import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import BubblePage from '../components/BubblePage';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest)
    return (
        <Route
          {...rest}
          render={props => {
            if (localStorage.getItem('token')) {
              return <Component {...props} />;
            }
            return <Redirect to='/' />;
          }}
        />
      );
}

export default PrivateRoute;   
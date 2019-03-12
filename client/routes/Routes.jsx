import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import SignupPage from '../../imports/ui/features/SignupPage';
import HomePage from '../../imports/ui/features/HomePage';
import { withApollo } from 'react-apollo';
import LoginPage from '../../imports/ui/features/LoginPage';

function MainRoutes({ ...rest }) {
  return (
    <Switch {...rest}>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoutes loggedIn={Meteor.loggingIn()} />
    </Switch>
  );
}

export default withApollo(MainRoutes);

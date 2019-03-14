import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import SignupPage from '../../imports/ui/features/SignupPage';
import HomePage from '../../imports/ui/features/HomePage';
import { withApollo } from 'react-apollo';
import LoginPage from '../../imports/ui/features/LoginPage';
import Layout from '../../imports/ui/components/Layout';
import CarsPage from '../../imports/ui/features/CarsPage';
import posed, { PoseGroup } from 'react-pose';

import { Accounts } from 'meteor/accounts-base';
const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    delay: 150,
    transition: {
      default: () => ({
        duration: 300,
      }),
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      default: () => ({
        duration: 250,
      }),
    },
  },
});

function MainRoutes({ ...rest }) {
  const loggedIn =
    Accounts._storedLoginToken() || Meteor.loggingIn() || Meteor.user();

  return (
    <Switch>
      <Route
        render={({ location }) => {
          return (
            <Layout loggedIn={!!loggedIn}>
              <PoseGroup>
                <RouteContainer key={location.key || location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} key="home" />
                    <Route path="/cars" component={CarsPage} key="cars" />
                    <Route path="/signup" component={SignupPage} key="signup" />
                    <Route path="/login" component={LoginPage} key="login" />
                    <PrivateRoutes loggedIn={!!loggedIn} key="admin" />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </Layout>
          );
        }}
      />
    </Switch>
  );
}

export default withRouter(withApollo(MainRoutes));

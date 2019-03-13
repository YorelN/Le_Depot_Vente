import React from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import SignupPage from '../../imports/ui/features/SignupPage';
import HomePage from '../../imports/ui/features/HomePage';
import { withApollo } from 'react-apollo';
import LoginPage from '../../imports/ui/features/LoginPage';
import Layout from '../../imports/ui/components/Layout';
import CarsPage from '../../imports/ui/features/CarsPage';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      default: props => ({
        duration: 300,
      }),
    },
  },
  exit: {
    opacity: 0,
    y: 50,

    transition: {
      default: props => ({
        duration: 300,
      }),
    },
  },
});

function MainRoutes() {
  return (
    <Route
      render={({ location }) => {
        return (
          <Layout>
            <PoseGroup>
              <RouteContainer key={location.key}>
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} key="home" />
                  <Route path="/cars" component={CarsPage} key="cars" />
                  <Route path="/signup" component={SignupPage} key="signup" />
                  <Route path="/login" component={LoginPage} key="login" />
                  <PrivateRoutes loggedIn={Meteor.loggingIn()} key="admin" />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </Layout>
        );
      }}
    />
  );
}

export default withApollo(MainRoutes);

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './ApolloClient';
import Layout from '../imports/ui/components/Layout';
import MainRoutes from './routes/Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import theme from '../imports/ui/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

const history = createBrowserHistory();
const APP = (
  <ApolloProvider client={client}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <MainRoutes />
      </MuiThemeProvider>
    </Router>
  </ApolloProvider>
);

Meteor.startup(() => {
  render(APP, document.getElementById('react-target'));
});

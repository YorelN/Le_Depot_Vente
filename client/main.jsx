import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './ApolloClient';
import MainRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import theme from '../imports/ui/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

const APP = (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>
);

Meteor.startup(() => {
  render(APP, document.getElementById('react-target'));
});

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import { ApolloProvider } from 'react-apollo';
import client from './ApolloClient';

const APP = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(APP, document.getElementById('react-target'));
});

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import { ApolloProvider } from 'react-apollo';
import client from './ApolloClient';
import Layout from '../imports/ui/components/Layout';

const APP = (
  <ApolloProvider client={client}>
    <Layout>
      <App />
    </Layout>
  </ApolloProvider>
);

Meteor.startup(() => {
  render(APP, document.getElementById('react-target'));
});

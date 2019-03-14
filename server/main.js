import { Meteor } from 'meteor/meteor';
import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';

import { Accounts } from 'meteor/accounts-base';

import typeDefs from './graphql/types/typeDefs';
import resolvers from './graphql/resolvers/resolvers';

Meteor.startup(() => {
  // Server code goes here ...

  const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: async ({ req }) => {
      return { token: req.headers.authorization };
    },
  });

  server.applyMiddleware({
    app: WebApp.connectHandlers,
    path: '/graphql',
  });

  WebApp.connectHandlers.use('/graphql', (req, res) => {
    if (req.method === 'GET') {
      res.end();
    }
  });
});

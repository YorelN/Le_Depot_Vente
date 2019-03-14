import * as CustomerMutations from '../resolvers/customers/mutations';
import * as CustomerQueries from '../resolvers/customers/queries';
import * as AuthMutations from '../resolvers/auth/mutations';
import * as AuthQueries from '../resolvers/auth/queries';

const resolvers = {
  Query: {
    ...CustomerQueries,
    ...AuthQueries,
  },
  Mutation: {
    ...CustomerMutations,
  },
};

export default resolvers;

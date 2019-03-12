import * as CustomerMutations from '../resolvers/customers/mutations';
import * as CustomerQueries from '../resolvers/customers/queries';
import * as AuthMutations from '../resolvers/auth/mutations';

const resolvers = {
  Query: {
    ...CustomerQueries,
  },
  Mutation: {
    ...CustomerMutations,
    ...AuthMutations,
  },
};

export default resolvers;

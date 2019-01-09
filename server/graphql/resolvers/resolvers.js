import * as CustomerMutations from '../resolvers/customers/mutations';
import * as CustomerQueries from '../resolvers/customers/queries';

const resolvers = {
  Query: {
    ...CustomerQueries,
  },
  Mutation: {
    ...CustomerMutations,
  },
};

export default resolvers;

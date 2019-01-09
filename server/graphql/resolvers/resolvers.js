import Customers from '../../../imports/api/customers';
import * as CustomerMutations from '../resolvers/customers/mutations';

const resolvers = {
  Query: {
    customer: () => ({
      firstName: 'toto',
      lastName: 'tata',
      email: 'toto@tata.fr',
    }),
    customers: () => Customers.find({}),
  },
  Mutation: {
    ...CustomerMutations,
  },
};

export default resolvers;

import { gql } from 'apollo-server-express';
import { customer } from './customers/customers';

const typeDefs = gql`
  type Query {
    customer(id: String!): Customer
    customers: [Customer]
  }

  # First approach ...
  # TODO: Use a better way to import Type/Input/InputType.
  ${customer}
`;

export default typeDefs;

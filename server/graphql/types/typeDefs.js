import { gql } from 'apollo-server-express';
import { customer } from './customers/customers';
import { credentials } from './auth/credentials';

const typeDefs = gql`
  type Query {
    customer(id: String!): Customer
    customers: [Customer]
    me: MeType
  }
  type Mutation {
    addCustomer(customer: AddCustomerInputType): Customer
    login(credentials: CredentialsInputType): CredentialsType
  }

  # First approach ...
  # TODO: Use a better way to import Type/Input/InputType.
  ${customer}
  ${credentials}
`;

export default typeDefs;

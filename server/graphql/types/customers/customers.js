import { gql } from 'apollo-server-core';

export const customer = gql`
  type Customer {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  input AddCustomerInputType {
    firstName: String!
    lastName: String!
    email: String!
  }
`;

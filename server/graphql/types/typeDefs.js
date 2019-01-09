import { gql } from 'apollo-server-express';
import { customer } from './customers';

const typeDefs = gql`
  type Query {
    customer: Customer
    customers: [Customer]
  }
  type Mutation {
    addCustomer(customer: AddCustomerInputType): Customer
  }

  ${customer}
`;

export default typeDefs;

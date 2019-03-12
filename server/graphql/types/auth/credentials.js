import { gql } from 'apollo-server-core';

export const credentials = gql`
  type CredentialsType {
    password: String
    email: String
  }

  input CredentialsInputType {
    password: String!
    email: String!
  }
`;

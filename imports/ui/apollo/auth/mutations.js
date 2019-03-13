import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($credentials: CredentialsInputType!) {
    login(credentials: $credentials) {
      email
      password
    }
  }
`;

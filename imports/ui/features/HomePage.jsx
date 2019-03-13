import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function HomePage({ ...props }) {
  return (
    <Query
      query={gql`
        query {
          customers {
            firstName
          }
        }
      `}
    >
      {({ ...rest }) => {
        return (
          <div>
            <h1>Home</h1>
            <p>Yay </p>
          </div>
        );
      }}
    </Query>
  );
}

export default HomePage;

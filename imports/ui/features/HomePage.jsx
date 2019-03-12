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
        return <div />;
      }}
    </Query>
  );
}

export default HomePage;

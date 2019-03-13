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
          <React.Fragment>
            <h1>Cars</h1>
            <p>Yoy </p>
          </React.Fragment>
        );
      }}
    </Query>
  );
}

export default HomePage;

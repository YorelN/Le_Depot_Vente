import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import PropTypes from 'prop-types';

function PrivateRoutes({ loggedIn, ...rest }) {
  return (
    <Route
      exact
      path="/admin"
      render={() => (loggedIn ? <AdminRoutes /> : <Redirect to="/login" />)}
    />
  );
}

PrivateRoutes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoutes;

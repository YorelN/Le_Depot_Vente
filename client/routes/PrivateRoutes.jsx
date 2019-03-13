import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import PropTypes from 'prop-types';

function PrivateRoutes({ loggedIn, ...rest }) {
  return (
    <Route
      exact
      path="/admin"
      component={() => (!loggedIn ? <Redirect to="/login" /> : <AdminRoutes />)}
    />
  );
}

PrivateRoutes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoutes;

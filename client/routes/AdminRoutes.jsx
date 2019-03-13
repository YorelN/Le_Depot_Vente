import React from 'react';
import { Route, Switch } from 'react-router-dom';

function AdminRoutes({ ...rest }) {
  return (
    <Switch {...rest}>
      <Route component={() => 'admin'} />
    </Switch>
  );
}

export default AdminRoutes;

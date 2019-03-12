import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../imports/ui/components/Layout';

function AdminRoutes({ ...rest }) {
  return (
    <Layout>
      <Switch {...rest}>
        <Route component={() => 'admin'} />
      </Switch>
    </Layout>
  );
}

export default AdminRoutes;

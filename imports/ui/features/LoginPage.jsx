import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '../components/Paper';
import Button from '../components/Button';
import { Accounts } from 'meteor/accounts-base';

function LoginPage({ ...rest }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { history } = rest;

  const login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(email, password, err => {
      console.log(err);
    });
  };

  return (
    <Grid
      container
      style={{ height: '100vh' }}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={4}>
        <Paper
          title="Login"
          type="form"
          handleSubmit={e => login(e)}
          elevation={1}
          actions={[
            <Button onClick={() => history.push('/signup')} validation>
              Inscription
            </Button>,
            <Button type="submit" validation>
              Connexion
            </Button>,
          ]}
        >
          <Grid container spacing={16} direction="column">
            <Grid item xs={12}>
              <TextField
                onChange={e => setEmail(e.target.value)}
                label="Email"
                required
                fullWidth
              />
              <TextField
                onChange={e => setPassword(e.target.value)}
                label="Mot de passe "
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LoginPage;

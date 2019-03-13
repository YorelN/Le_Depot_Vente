import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '../components/Paper';
import Button from '../components/Button';
import { Accounts } from 'meteor/accounts-base';

function SignupPage({ ...rest }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { history } = rest;

  const addUser = () => {
    Accounts.createUser({ email, password, username }, err => {
      if (!err) {
        Meteor.loginWithPassword(email, password, err => {
          err && console.err(err);
        });
      }
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
          title="Inscription"
          type="form"
          handleSubmit={() => addUser()}
          elevation={1}
          actions={[
            <Button light onClick={() => history.push('/login')}>
              Connexion
            </Button>,
            <Button type="submit" validation>
              Inscription
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
                onChange={e => setUsername(e.target.value)}
                label="Nom d'utilisateur"
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

export default SignupPage;

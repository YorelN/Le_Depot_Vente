import React from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import DirectionsCar from '@material-ui/icons/DirectionsCar';
import NewReleases from '@material-ui/icons/NewReleases';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Fingerprint';
import HightLightOff from '@material-ui/icons/HighlightOff';

import { withStyles } from '@material-ui/core/styles';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#ffef67',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    paddingTop: 54,
    // background: '#26303c',
    height: 'calc(100vh - 85px - 24px)',
    zIndex: 420,
  },
  toolbar: {
    ...theme.mixins.toolbar,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: '0 10px',
    color: '#26303c',
    borderColor: '#26303c',
    fontWeight: 200,
    textTransform: 'unset',
  },
  menuLinks: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  login = () => {
    this.props.history.push('/login');
  };

  logout = () => {
    Meteor.logout(err => {
      if (!err) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    const { classes, theme, loggedIn } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar} variant="dense">
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <IconButton
                  component={Link}
                  to="/"
                  color="inherit"
                  className={classes.button}
                >
                  <HomeIcon />
                </IconButton>
              </Grid>

              <Grid item className={classes.menuLinks}>
                <Tooltip title="Toutes les voitures">
                  <IconButton
                    component={Link}
                    to="/cars"
                    className={classes.button}
                  >
                    <DirectionsCar />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Dernières annonces">
                  <IconButton
                    component={Link}
                    to="/latest"
                    className={classes.button}
                  >
                    <NewReleases />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Nous contacter">
                  <IconButton
                    component={Link}
                    to="/contact"
                    className={classes.button}
                  >
                    <PhoneIcon />
                  </IconButton>
                </Tooltip>
                {loggedIn && (
                  <Tooltip title="Mon compte">
                    <IconButton
                      onClick={() => this.logout()}
                      className={classes.button}
                    >
                      <HightLightOff />
                    </IconButton>
                  </Tooltip>
                )}
                {!loggedIn && (
                  <IconButton
                    onClick={() => this.login()}
                    className={classes.button}
                  >
                    <PersonIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>{this.props.children}</main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
};

export default withRouter(
  withStyles(styles, { withTheme: true })(ResponsiveDrawer),
);

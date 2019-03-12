import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: 'linear-gradient(to right, #2274A5 0%, #E83F6F 100%)',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: 64,
  },
  toolbar: {
    ...theme.mixins.toolbar,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: '0 10px',
    color: '#FFF',
    borderColor: '#FFF',
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

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={3}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item className={classes.menuLinks}>
                <Button color="default" className={classes.button}>
                  Toutes les voitures
                </Button>
                <Button color="default" className={classes.button}>
                  Les dernières annonces
                </Button>
                <Button color="default" className={classes.button}>
                  Nous contacter
                </Button>
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

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

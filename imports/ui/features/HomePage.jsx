import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withApollo } from 'react-apollo';
import HomeBanner from '../components/HomeBanner';
import Button from '../components/Button';
import Typography from '../components/Typography';

const styles = theme => ({
  search: {
    transition: '0.3s',

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.75),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    height: 40,
    borderRadius: 4,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 420,
      '&:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.95),
      },
    },
  },
});

function HomePage({ classes, ...props }) {
  return (
    <Query
      fetchPolicy="network-only"
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
          <HomeBanner>
            <div className="children">
              <Typography variant="h1">
                Trouver vôtre voiture de rêve
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </div>
          </HomeBanner>
        );
      }}
    </Query>
  );
}

export default withApollo(withStyles(styles)(HomePage));

import React from 'react';
import styled from 'styled-components';
import MUIPaper from '@material-ui/core/Paper';
import MUICardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';

const Wrapper = styled(MUIPaper)`
  && {
    padding: 10px 10px 0 10px;
  }
`;
const Spacer = styled.div`
  padding: 30px 0 0;
`;

function Paper({ title, type, actions, children, handleSubmit }) {
  return (
    <Wrapper>
      {title && <MUICardHeader title={title} />}
      <CardContent>
        {type === 'form' ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {children}
            <Spacer>
              <Grid
                container
                spacing={8}
                alignItems="center"
                justify="flex-end"
              >
                {actions &&
                  actions.map((action, index) => (
                    <Grid key={`action-butto-${index}`} item>
                      {action}
                    </Grid>
                  ))}
              </Grid>
            </Spacer>
          </form>
        ) : (
          <React.Fragment>
            {children}
            <Spacer>
              <Grid
                container
                spacing={8}
                alignItems="center"
                justify="flex-end"
              >
                {actions &&
                  actions.map((action, index) => (
                    <Grid key={`action-butto-${index}`} item>
                      {action}
                    </Grid>
                  ))}
              </Grid>
            </Spacer>
          </React.Fragment>
        )}
      </CardContent>
    </Wrapper>
  );
}

export default Paper;

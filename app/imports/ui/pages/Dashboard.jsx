import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Dashboard extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='small' circular src="/images/meteor-logo.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>DASHBOARD GOES HERE</h1>
            <h1>THIS IS BASCIALLY THE CENTRAL HOME PAGE</h1>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Dashboard;

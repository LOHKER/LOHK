import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='small' circular src="/images/meteor-logo.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>This is the landing page.</h1>
            <h1>Maybe we just have this redirect to the log-in page instead?</h1>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Landing;

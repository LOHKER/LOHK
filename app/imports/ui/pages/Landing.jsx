import React from 'react';
import { Grid, Image, Header, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div style={{ backgroundColor: '#2A427A' }}>
          <Grid verticalAlign='middle' textAlign='center' container
                style={{ paddingTop: '4em', paddingBottom: '7em' }}>
            <Grid.Column>
              <Image centered style={{ width: '110px' }} src="/images/LOHK-white.png"/>
              <Header style={{ paddingTop: '60px' }} inverted as={'h1'}>
                INSERT PASSWORDS IN THEIR PLACE
              </Header>
              <Header style={{ marginTop: '1px' }} inverted as={'h2'}>
                We&apos;ll take care of them for you
              </Header>
              <Button inverted animated='fade' size={'huge'} as={NavLink} exact to={'/signup'}
                      style={{ backgroundColor: '#D7B377', marginTop: '55px' }}>
                <Button.Content style={{ color: 'white' }} visible>
                  GET STARTED
                </Button.Content>
                <Button.Content style={{ color: 'white' }} inverted hidden>
                  SIGN UP
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;

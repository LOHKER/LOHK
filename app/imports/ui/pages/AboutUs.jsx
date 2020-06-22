import React from 'react';
import { Container, Header, Image, Segment, Grid } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class AboutUs extends React.Component {
  render() {
    return (
        <div style={{ backgroundColor: '#2A427A' }}>
          <NavBar/>
          <Container style={{ paddingTop: '65px', paddingBottom: '130px' }}>
            <Header inverted as={'h1'}>
              Our Mission
            </Header>
            <Header inverted as={'h3'}>
              Based in Oahu, Hawaii, LOHKER is a company that strives to provide the best security for our consumers. We
              are committed to protecting sensitive personal information and serving our users in the most secure way.
              Working hard to ensure the best security, we hope that the public will trust us to hold their information.
            </Header>
            <Segment
                inverted
                style={{ backgroundColor: '#D7B377', paddingTop: '50px', paddingBottom: '50px', marginTop: '70px' }}>
              <Grid textAlign={'center'} columns={'equal'}>
                <Grid.Column>
                  <Image centered style={{ width: '150px' }} circular src={'/images/jake.png'}/>
                  <Header inverted as={'h4'}>Jake Camarao</Header>
                </Grid.Column>
                <Grid.Column>
                  <Image centered style={{ width: '150px' }} circular src={'/images/james.jpg'}/>
                  <Header inverted as={'h4'}>James Lau</Header>
                </Grid.Column>
                <Grid.Column>
                  <Image centered style={{ width: '150px' }} circular src={'/images/corben.jpg'}/>
                  <Header inverted as={'h4'}>Corben Broennimann</Header>
                </Grid.Column>
                <Grid.Column>
                  <Image centered style={{ width: '150px' }} circular src={'/images/kyra.jpg'}/>
                  <Header inverted as={'h4'}>Kyra Ikeda</Header>
                </Grid.Column>
              </Grid>
            </Segment>
          </Container>
        </div>
    );
  }
}

export default AboutUs;

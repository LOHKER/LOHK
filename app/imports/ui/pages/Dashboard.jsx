import React from 'react';
import { Button, Icon, Popup, Card, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class Dashboard extends React.Component {
  render() {
    const divStyle = { paddingTop: '20px', paddingBottom: '210px' };
    return (
        <div style={{ backgroundColor: '#2A427A' }}>
          <Popup on='click' trigger={<Button inverted animated='fade' size={'medium'}
                                  style={{ backgroundColor: '#D7B377', marginTop: '25px' }}>
            <Button.Content style={{ color: 'white' }} visible>
              <Icon name={'plus circle'}></Icon> ADD INFO
            </Button.Content>
            <Button.Content style={{ color: '#385F71' }} inverted hidden>
              <Icon name={'plus circle'}></Icon> ADD INFO
            </Button.Content>
          </Button>}>
            <Button inverted animated='fade' size={'medium'} as={NavLink} exact to={'/add-account'}
                    style={{ backgroundColor: '#D7B377' }}>
              <Button.Content style={{ color: 'white' }} visible>
                <Icon name={'plus circle'}></Icon> ADD ACCOUNT
              </Button.Content>
              <Button.Content style={{ color: '#385F71' }} inverted hidden>
                <Icon name={'plus circle'}></Icon> ADD ACCOUNT
              </Button.Content>
            </Button>
            <Button inverted animated='fade' size={'medium'} as={NavLink} exact to={'/add-card'}
                    style={{ backgroundColor: '#D7B377' }}>
              <Button.Content style={{ color: 'white' }} visible>
                <Icon name={'plus circle'}></Icon> ADD CREDIT CARD
              </Button.Content>
              <Button.Content style={{ color: '#385F71' }} inverted hidden>
                <Icon name={'plus circle'}></Icon> ADD CREDIT CARD
              </Button.Content>
            </Button>
          </Popup>
        <Container style={ divStyle }>
          Content
        </Container>
        </div>
    );
  }
}

export default Dashboard;

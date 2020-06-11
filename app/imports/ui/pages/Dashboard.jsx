import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Icon, Popup, Grid, Image, Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Informations } from '../../api/information/Information';
import { Cards } from '../../api/card/Card';
import InformationItem from '../components/InformationItem';
import CardItem from '../components/CardItem';

/** A simple static component to render some text for the landing page. */
class Dashboard extends React.Component {
  render() {
    const divStyle = { paddingTop: '20px', paddingBottom: '300px' };
    return (
        <div style={{ backgroundColor: '#2A427A' }}>
          <Grid>
            <Grid.Column centered width={3} style={{ backgroundColor: '#385F71' }}>
              <Image centered style={{ width: '60px' }} src="/images/LOHK-white.png"/>
              {/** Will cause the page to display the account's Account info (not functional) */}
              <Button inverted size={'large'} style={{ backgroundColor: '#D7B377',
                marginTop: '30px', marginLeft: '60px' }}>
                ACCOUNTS
              </Button>
              {/** Will cause the page to display the account's Credit Card info (not functional) */}
              <Button inverted size={'large'} style={{ backgroundColor: '#D7B377',
                marginTop: '30px', marginLeft: '50px', marginBottom: '30px' }}>
                CREDIT CARDS
              </Button>
              {/** The Add info button, creates popup with button options when clicked */}
              <Popup on='click' trigger={<Button inverted animated='fade' size={'medium'}
                                                 style={{ backgroundColor: '#D7B377', marginBottom: '30px', marginLeft: '60px' }}>
                <Button.Content style={{ color: 'white' }} visible>
                  <Icon name={'plus circle'}></Icon> ADD INFO
                </Button.Content>
                {/** Button text that is shown when cursor hovers over button */}
                <Button.Content style={{ color: '#385F71' }} inverted hidden>
                  <Icon name={'plus circle'}></Icon> ADD INFO
                </Button.Content>
              </Button>}>
                {/** link to add account page */}
                <Button inverted animated='fade' size={'medium'} as={NavLink} exact to={'/add-account'}
                        style={{ backgroundColor: '#D7B377' }}>
                  <Button.Content style={{ color: 'white' }} visible>
                    <Icon name={'plus circle'}></Icon> ADD ACCOUNT
                  </Button.Content>
                  <Button.Content style={{ color: '#385F71' }} inverted hidden>
                    <Icon name={'plus circle'}></Icon> ADD ACCOUNT
                  </Button.Content>
                </Button>
                {/** Link to add credit card page */}
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
            </Grid.Column>
            {/**  This column is empty as is just here to put space between the side bar probably will be removed */}
            <Grid.Column width={1}>
            </Grid.Column>
            {/**  This column will hold the credit card information, this is temporary until we can figure out how to
             *make the page only show either credit card or account information */}
            <Grid.Column inverted width={6}>
              <h1>
                Credit Cards
              </h1>
              <Card.Group style={ divStyle }>
                {this.props.cards.map((card) => <CardItem key={card._id} card={card} />)}
              </Card.Group>
            </Grid.Column>
            {/**  This column will hold the account information, this is temporary until we can figure out how to
             *make the page only show either credit card or account information */}
            <Grid.Column inverted width={6}>
              <h1>
                Accounts
              </h1>
              <Card.Group style={ divStyle }>
              {this.props.informations.map((information) => <InformationItem key={information._id} information={information} />)}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Information documents in the props. */
Dashboard.propTypes = {
  informations: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to item documents.
  const subscription = Meteor.subscribe('Information');
  const subscription2 = Meteor.subscribe('Card');
  return {
    informations: Informations.find({}).fetch(),
    cards: Cards.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(Dashboard);

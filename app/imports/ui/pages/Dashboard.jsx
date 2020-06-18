import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Icon, Popup, Grid, Image, Card, Segment, Sidebar, Menu, Header, Modal } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Informations } from '../../api/information/Information';
import { Cards } from '../../api/card/Card';
import InformationItem from '../components/InformationItem';
import CardItem from '../components/CardItem';
import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class Dashboard extends React.Component {
  state = {
    displayInfo: false,
  }

  state = {
    displayCard: false,
  }

  state = { open: false }

  displaysInfo = () => {
    this.setState({
      displayInfo: !this.state.displayInfo,
    });
    if (this.state.displayCard) {
      this.setState({
        displayCard: !this.state.displayCard,
      });
    }
  }

  displaysCard = () => {
    this.setState({
      displayCard: !this.state.displayCard,
    });
    if (this.state.displayInfo) {
      this.setState({
        displayInfo: !this.state.displayInfo,
      });
    }
  }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  /** this function will occur when the user clicks 'yes'
   * The user that is selected will be DELETED from the database
   * Then, the user will have the page refreshed
   */
  handleYes() {
    Meteor.users.remove(Meteor.userId());
    /** this refreshes the page */
    // eslint-disable-next-line no-unused-expressions
  }

  render() {
    const { open } = this.state;
    const divStyle = { paddingTop: '20px', paddingBottom: '300px' };
    let page = <Grid.Column verticleAlign='middle' width={10} style={ divStyle } textAlign= 'center'>
      <Image centered style={{ width: '130px', marginBottom: '30px', marginTop: '30px' }} src="/images/LOHK-white.png"/>
      <h1>
        Welcome to LOHK
      </h1>
    </Grid.Column>;
    if (this.state.displayInfo) {
      page = (
          <Grid.Column inverted width={12}>
            <h1>
              Accounts
            </h1>
            <Card.Group style={ divStyle }>
              {this.props.informations.map((information) => <InformationItem key={information._id} information={information} />)}
            </Card.Group>
          </Grid.Column>
      );
    }
    if (this.state.displayCard) {
      page = (
          <Grid.Column inverted width={12}>
            <h1>
              Credit Cards
            </h1>
            <Card.Group style={ divStyle }>
              { this.props.cards.map((card) => <CardItem key={card._id} card={card}/>) }
            </Card.Group>
          </Grid.Column>
      );
    }
    return (
        <div style={{ backgroundColor: '#2A427A' }}>
        <NavBar/>
          <Sidebar.Pushable inverted as={Segment} style={{ backgroundColor: '#2A427A' }}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
                style={{ backgroundColor: '#385F71' }}
            >
              <Image centered style={{ width: '60px', marginBottom: '30px' }} src="/images/LOHK-white.png"/>
              <Menu.Item>
              MY INFO
              </Menu.Item>
              <Menu.Item onClick={this.displaysCard}>
                <Icon name={'credit card outline'}/> Credit Cards
              </Menu.Item>
              <Menu.Item onClick={this.displaysInfo}>
                <Icon name={'user outline'}/> Accounts
              </Menu.Item>
              <Menu.Item>
              ADD INFO
              </Menu.Item>
              <Menu.Item as={NavLink} exact to={'/add-card'}>
                <Icon name='plus'/>
                Add Credit Card
              </Menu.Item>
              <Menu.Item as={NavLink} exact to={'/add-account'}>
                <Icon name='plus'/>
                Add Account
              </Menu.Item>
              <Menu.Item>
              User Controls
              </Menu.Item>
              <Menu.Item>
              <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                trigger={<Button>Delete Account</Button>} basic size='small'>
              <Header>
                <Icon name='erase' />
                Remove your account from LOHK&apos;s database.
              </Header>
              <Modal.Content>
                <p>
                  Are you sure you want to delete your account?
                  This can't be undone once the action has gone through.
                  All of the information saved will be taken out of our records.
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                    basic color='red'
                    onClick={this.close}
                    inverted>
                  <Icon name='remove' /> No
                </Button>
                <Button
                    basic color='green'
                    onClick={this.handleYes.bind(this)}
                    as={NavLink} exact to={'/delete'}
                    inverted>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Grid>

                  {/**  This column is empty as is just here to put space between the side bar probably will be removed */}
                  <Grid.Column width={3} style={{ paddingBottom: '600px' }}>
                  </Grid.Column>

                  {/**  This column will hold the credit card information, this is temporary until we can figure out how to
                   *make the page only show either credit card or account information */}
                  {page}
                </Grid>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>

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

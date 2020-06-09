import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Informations } from '../../api/information/Information';
import { Cards } from '../../api/card/Card';
import InformationItem from '../components/InformationItem';
import CardItem from '../components/CardItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListInformation extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Saved Accounts</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* eslint-disable-next-line max-len */}
              {this.props.informations.map((information) => <InformationItem key={information._id} information={information} />)}
            </Table.Body>
          </Table>

          <Header as="h2" textAlign="center">Saved Cards</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Card Number</Table.HeaderCell>
                <Table.HeaderCell>Security Pin</Table.HeaderCell>
                <Table.HeaderCell>Expiration Date</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* eslint-disable-next-line max-len */}
              {this.props.cards.map((card) => <CardItem key={card._id} card={card} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListInformation.propTypes = {
  informations: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Information');
  const subscription2 = Meteor.subscribe('Card');
  return {
    informations: Informations.find({}).fetch(),
    cards: Cards.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListInformation);

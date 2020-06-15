import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserItem from '../components/UserItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">All Users Registered</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Registered Users</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* create a function to list all users */}
              {/* {this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)} */}
              {this.props.users.map((user) => <UserItem key={user._id} user={user}/>)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Users documents in the props. */
AdminPage.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Admin');
  return {
    users: Meteor.users.find().fetch(),
    ready: subscription.ready(),
  };
})(AdminPage);
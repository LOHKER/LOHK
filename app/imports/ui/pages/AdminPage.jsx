import React from 'react';
import { Container, Table, Header } from 'semantic-ui-react';
import StuffItem from '../components/StuffItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {

    return (
        <Container>
          <Header as="h2" textAlign="center">Saved Information</Header>
          <Table celled>
            <Table.Header>
              {/* create a function to list all users */}
              <Table.Row>
                <Table.HeaderCell>Registered Users</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* create a function to list all users */}
              {/* {this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)} */}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

export default AdminPage;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Modal, Header, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class UserItem extends React.Component {

  state = { open: false }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  /** this function will occur when the user clicks 'yes'
   * The user that is selected will be DELETED from the database
   * Then, the user will have the page refreshed
   */
  handleYes() {
    Meteor.users.remove(this.props.user._id);
    /** this refreshes the page */
    // eslint-disable-next-line no-unused-expressions
    <meta httpEquiv="refresh" content = "2; url=/#/admin" />;
  }

  render() {
    const { open } = this.state;

    return (
        <Table.Row>
          <Table.Cell>{this.props.user.username}</Table.Cell>
          <Table.Cell>
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                trigger={<Button>Remove</Button>} basic size='small'>
              <Header>
                <Icon name='erase' />
                Remove {this.props.user.username} from LOHK&apos;s database.
              </Header>
              <Modal.Content>
                <p>
                  Are you sure you want to remove {this.props.user.username}?
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
                    inverted>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UserItem);
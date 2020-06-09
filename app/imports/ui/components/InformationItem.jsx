import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class InformationItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.information.username}</Table.Cell>
          <Table.Cell>{this.props.information.password}</Table.Cell>
          <Table.Cell>{this.props.information.notes}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.information._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
InformationItem.propTypes = {
  information: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(InformationItem);

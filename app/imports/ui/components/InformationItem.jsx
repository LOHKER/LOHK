import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class InformationItem extends React.Component {
  render() {
    return (
        <Card>
          <Card.Description>
            <Icon size={'large'} name={'user outline'}/>
          </Card.Description>
          <Card.Content>
            Username: {this.props.information.username}
          </Card.Content>
          <Card.Content>
            Password: {this.props.information.password}
          </Card.Content>
          <Card.Content>
            Notes: {this.props.information.notes}
          </Card.Content>
          <Card.Meta>
            <Link to={`/edit-accounts/${this.props.information._id}`}>Edit</Link>
          </Card.Meta>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
InformationItem.propTypes = {
  information: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(InformationItem);

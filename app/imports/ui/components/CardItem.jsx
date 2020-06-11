import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class CardItem extends React.Component {
  render() {
    return (
        <Card>
          <Card.Description>
            <Icon size={'large'} name={'credit card outline'}/>
          </Card.Description>
          <Card.Content>
            Card #: {this.props.card.number}
          </Card.Content>
          <Card.Content>
            Security Code: {this.props.card.pin}
          </Card.Content>
          <Card.Content>
            Exp. Date: {this.props.card.expire}
          </Card.Content>
          <Card.Content>
            Notes: {this.props.card.notes}
          </Card.Content>
          <Card.Meta>
            <Link to={`/edit-card/${this.props.card._id}`}>Edit</Link>
          </Card.Meta>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CardItem);

import React from 'react';
import { Grid, Loader, Header, Icon, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms

/** Renders the Page for editing a single document. */
class RemoveUser extends React.Component {

  handleClick() {
    Meteor.users.remove(Meteor.users._id);
    console.log('function is happening');
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {

    console.log(Meteor.users.username);
    console.log(this.props.user._id);

    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Are you sure you want to remove {this.props.user.username}?</Header>
            <Button
                id='delete'
                animated color = 'black'
                onClick={this.handleClick.bind(this)}>
              <Button.Content visible>
                <Icon name='trash alternate' inverted/>
              </Button.Content>
              <Button.Content hidden>Remove</Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
RemoveUser.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  user: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Admin');
  return {
    user: Meteor.users.find().fetch(),
    ready: subscription.ready(),
  };
})(RemoveUser);
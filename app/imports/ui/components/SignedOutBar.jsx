import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SignedOutBar extends React.Component {

  render() {
    const menuStyle = { marginBottom: '10px', backgroundColor: '#1B2845' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
              <Menu.Item as={NavLink} activeClassName="" exact to="/">
                <Header inverted as='h1'>LOHK</Header>
              </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
SignedOutBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const SignedOutBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(SignedOutBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(SignedOutBarContainer);

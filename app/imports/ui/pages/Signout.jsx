import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader } from 'semantic-ui-react';
import SignedOutBar from '../components/SignedOutBar';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
      <div>
        <SignedOutBar/>
        <Header as="h2" textAlign="center">
          <p>You are signed out.</p>
          <p>Redirecting you back to the landing page...</p>
          <p>If you are not redirected within 5 seconds, click <a href="/#">here</a></p>
        </Header>
        <Loader large active inline='centered' />
        <meta httpEquiv="refresh" content = "5; url=/#/"/>
      </div>
    );
  }
}

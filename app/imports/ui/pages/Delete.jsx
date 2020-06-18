import React from 'react';
import { Header, Loader } from 'semantic-ui-react';
import SignedOutBar from '../components/SignedOutBar'

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class Deleted extends React.Component {
  render() {
    return (
        <div>
          <SignedOutBar/>
          <Header as="h2" textAlign="center">
            <p>You&apos;ve successfully deleted your account!</p>
            <p>Redirecting you back to the landing page...</p>
            <p>If you are not redirected within 5 seconds, click <a href="/#">here</a></p>
          </Header>
          <Loader large active inline='centered' />
          <meta httpEquiv="refresh" content = "5; url=/#/" />
        </div>
    );
  }
}

export default Deleted;
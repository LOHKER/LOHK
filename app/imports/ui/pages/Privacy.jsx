import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class Privacy extends React.Component {
  render() {
    return (
        <div style={{ paddingTop: '40px', paddingBottom: '70px' }}>
          <Image centered size='tiny' src={'/images/manoalist-circle.png'} style={{ paddingBottom: '20px' }}/>
          <Container style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <Header as="h1" textAlign="left">PRIVACY NOTICE</Header><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>Last updated: (June 15, 2020)</Header>
            <p style={{ marginTop: '0px' }}>
              This Privacy Notice describes how LOHKER Inc. ("LOHKER"), the company behind LOHK, handles
              your Personal Data when you use our LOHK services ("Services").<br/><br/>
              By using our Services and/or registering for an account, you are accepting the terms of this Privacy
              Notice and our Terms of Service which are integrated here by reference.<br/><br/>
              LOHKER is a global company. Although our physical servers are located in many different countries
              around the world, LOHKER does not store Personal Data outside of the United States' physical borders. By
              using our services, you authorize LOHKER to use your information according to the Unites States' laws,
              regardless of which country you are located in.<br/><br/>
              If you have any questions or comments about this Privacy Notice, please contact us at: LOHKER@gmail.com.
            </p>
            <p style={{ marginTop: '0px' }}>
              1. PERSONAL DATA COLLECTION AND USE
              As a provider of online privacy and security services, we ultimately strive to collect the minimal amount
              of information required to operate our service. This often means difficult trade-offs between the
              information we collect and the performance of our Service.

              We believe in an open dialogue because this Privacy Notice is an evolving document. We welcome your
              thoughts and feedback on how we're doing.

              1.1 WHAT IS PERSONAL DATA?
              "Personal Data" means any information relating to an identified or identifiable natural person
              ("Individual") and includes information about you that you provide while using our Services. If we use or
              store Personal Data with information that is non-personal, we will consider the combination as Personal
              Data.

              The Personal Data we collect includes your Account Data, certain credit card or payment information and,
              in some circumstances may include Operational Data, as described below. We may also collect Personal Data
              you provide to us if you communicate with us, for example, to request support or information.

              We collect, use and disclose your Personal Data as necessary in order to provide you with the Services and
              for the other purposes identified below.

              1.2 YOUR LOHK DATA
              LOHK was carefully engineered so that you and only you can access the information stored in
              LOHK. All items, such as passwords, credit cards, notes and any other types of data, stored by you in
              LOHK are end-to-end encrypted. No LOHK staff, including our support team and engineers, can view
              or access the information you store in LOHK.

              Your encrypted LOHK data will be stored on our servers in Hawaii so that you can sync between
              devices. Even though your data will be stored on our servers, it will only be accessible by you when you
              unlock it with your Master Password.

              LOHKER does not own the data in your LOHK, this is your information and you can add to it, delete
              it and modify it anytime you choose.

              ACCOUNT DATA
              When you create or update your RememBear user account, we collect and store the following "Account Data".
              The Account Data is listed below in its entirety:
            </p>
            <p style={{ marginTop: '0px' }}>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
              the
              terms then you may not access the Service.
            </p>
            <Header as="h3" textAlign="left">Termination</Header>
            <p style={{ marginTop: '-10px' }}>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p style={{ marginTop: '0px' }}>
              All provisions of the Terms which by their nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
              liability.
            </p>
            <Header as="h3" textAlign="left">Content</Header>
            <p style={{ marginTop: '-10px' }}>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, or other material (&quot;Content&quot;).
            </p>
          </Container>
        </div>
    );
  }
}

export default Privacy;
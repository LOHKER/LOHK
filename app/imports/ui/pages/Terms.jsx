import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class Terms extends React.Component {
  render() {
    return (
        <div>
          <NavBar/>
          <Image centered size='tiny' src={'/images/LOHK-dark.png'}
                 style={{ paddingTop: '55px', paddingBottom: '40px' }}/>
          <Container style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '70px' }}>
            <Header as="h1" textAlign="left">TERMS OF SERVICE</Header><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>Last updated: (June 17, 2020)</Header>
            <p style={{ marginTop: '0px' }}>
              Thanks for using LOHK! These terms of service (the &quot;Agreement&quot;) cover your use of LOHK, a
              service operated by LOHKER Inc. (&quot;LOHKER&quot;). Along with this Agreement, our&nbsp;
              <a href={'/#/privacy'}>privacy notice</a>, explains how we use, protect and store any personal
              information that you may provide to us while using LOHK.
            </p><br/>
            <Header as="h2" textAlign="left" style={{ marginTop: '-10px' }}>Acceptance of Terms</Header>
            <p style={{ marginTop: '0px' }}>
              By using the LOHK application, service, and website (collectively, the &quot;Services&quot;), you
              agree and acknowledge that you have read, accept and are bound by this Agreement.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>
              This Agreement applies to everyone who uses our Services and you cannot use our Services unless you accept
              this Agreement.
            </Header>
            <p style={{ marginTop: '0px' }}>
              We maintain the right to change the terms of this Agreement at any time. If changes are made, we will post
              a link to the updated Agreement on RememBear.com. You are responsible for reviewing and becoming familiar
              with any changes. Using our Services following notification of a change to this Agreement will confirm
              that you&apos;ve accepted the updated Agreement.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>1.1&ensp;WHAT IS PERSONAL DATA?</Header>
            <p style={{ marginTop: '0px' }}>
              &quot;Personal Data&quot; means any information relating to an identified or identifiable natural person
              (&quot;Individual&quot;) and includes information about you that you provide while using our Services.
              If we use or store Personal Data with information that is non-personal, we will consider the combination
              as Personal Data.<br/><br/>
              The Personal Data we collect includes your Account Data, certain credit card or payment information and,
              in some circumstances may include Operational Data, as described below. We may also collect Personal Data
              you provide to us if you communicate with us, for example, to request support or information.<br/><br/>
              We collect, use and disclose your Personal Data as necessary in order to provide you with the Services and
              for the other purposes identified below.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>1.2&ensp;YOUR LOHK DATA</Header>
            <p>
              LOHK was carefully engineered so that you and only you can access the information stored in
              LOHK. All items, such as passwords, credit cards, notes and any other types of data, stored by you in
              LOHK are end-to-end encrypted. No LOHK staff, including our support team and engineers, can view
              or access the information you store in LOHK.<br/><br/>
              Your encrypted LOHK data will be stored on our servers in Hawaii so that you can sync between
              devices. Even though your data will be stored on our servers, it will only be accessible by you when you
              unlock it with your Master Password.<br/><br/>
              LOHKER does not own the data in your LOHK, this is your information and you can add to it, delete
              it and modify it anytime you choose.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>1.3&ensp;DISCLOSURE OF PERSONAL INFORMATION
              TO THIRD PARTIES</Header>
            <p style={{ marginTop: '0px' }}>
              Except as described below or as required or permitted by law, LOHKER will NOT disclose your Personal
              Data to any other third parties under any circumstance.<br/><br/>
              LOHKER may disclose your Personal Data to third party service providers (e.g., payment processors as
              described above) to the extent necessary in order to provide you with the Services; in such case, we use
              contractual or other means to ensure that there is a comparable level of protection for any Personal Data
              that is processed for us by third parties.<br/><br/>
              In the event LOHKER is served with a valid subpoena, warrant or other legal document and applicable
              law requires LOHKER to comply, the extent of disclosure is limited to the Personal Data listed within
              this Privacy Notice.<br/><br/>
              As noted above, LOHKER utilizes PCI-compliant third-party payment processors to collect your credit
              card and other billing information.<br/><br/>
              If our organization structure changes (i.e., we undergo a restructuring or are acquired), we may need to
              migrate your Personal Data to a third party related to a business transaction, but, we will ensure that
              such a third party has entered into an agreement under which the use of your Personal Data is only related
              to purposes necessary for the transaction.<br/><br/>
              LOHKER does NOT store users originating IP addresses when connected to our Services and thus cannot
              identify users when provided IP addresses. Additionally, we cannot disclose information about the
              passwords, credit cards or other data our users store in their LOHK, as LOHKER does NOT have
              access to this information.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>1.4&ensp;CHANGES TO OUR
              PRIVACY NOTICE</Header>
            <p style={{ marginTop: '0px' }}>
              We may need to change our Privacy Notice from time-to-time and all updates will be posted online at
              LOHK.com. Your continued use of our Services after the effective date of such changes constitutes
              your acceptance of such changes. We will post an effective date at the top of the page for your
              convenience. We welcome your thoughts and feedback.
            </p>
          </Container>
        </div>
    );
  }
}

export default Terms;

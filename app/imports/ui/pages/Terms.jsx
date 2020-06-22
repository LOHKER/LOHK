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
              a link to the updated Agreement on LOHK.com. You are responsible for reviewing and becoming familiar
              with any changes. Using our Services following notification of a change to this Agreement will confirm
              that you&apos;ve accepted the updated Agreement.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>YOUR RESPONSIBILITIES</Header><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>Your LOHK</Header>
            <p style={{ marginTop: '0px' }}>
              When you use our Services, you will likely store important things in LOHK. These items may include
              passwords, credit card numbers, notes and more (collectively, we call the items you store in LOHK
              &quot;Your LOHK&quot;). The contents of Your LOHK is yours. You own the contents of Your LOHK, not
              us. We have designed LOHK in such a way that we can&apos;t access the contents of Your LOHK. This
              Agreement doesn&apos;t give us any rights to the contents of Your LOHK.<br/><br/>
              As part of our Services, we offer the ability to sync Your LOHK and make it available across the
              computers, tablets or mobile devices that you approve. To do this, we need, and you agree that we have,
              your permission to store an encrypted version of Your LOHK on our servers. When Your LOHK is
              transferred or stored on our network, it will always be encrypted so that you are the only one who can
              access it.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>Your Master Password</Header>
            <p>
              Your LOHK is secured by a master password (&quot;Master Password&quot;) that you select. Entering your
              Master
              Password is the only way for you or anyone else to access Your LOHK. You can change this password at
              any time. You are responsible for keeping your Master Password a secret by storing your Master Password in
              a secure location.<br/><br/>
              As part of our Services, LOHKER will never be able to read or use your Master Password. We designed
              our Services this way to ensure that you are the only one who is able to access Your LOHK. However,
              this also means that we&apos;re unable to restore or change your Master Password if you forget it. If you
              forget your Master Password and wish to continue using our Services, we can reset your account, but in
              doing so the backup of Your LOHK on our servers will also be deleted.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>GRANT OF RIGHTS</Header>
            <p style={{ marginTop: '0px' }}>
              So long as you agree to and comply with the terms of this Agreement, LOHKER gives you a limited,
              nonexclusive, nontransferable, revocable right and license to (a) access and use the Services, and (b)
              download, install and use the client software (the &quot;Software&quot;) solely to access the Services;
              subject to the terms of this Agreement. LOHKER and/or third parties own all right, title and interest
              in and to the Services and Software, including all intellectual property rights. All rights not granted
              to you are reserved for LOHKER and its licensors.<br/><br/>
              To the extent that any component of the Software may be offered under an open source license, we&apos;ll
              make that license available to you and the provisions of that license may expressly override some of the
              terms of this Agreement.<br/><br/>
              You are responsible for ensuring that your use of the Services is in compliance with all applicable laws
              and regulations. You agree not to sublicense, lease, rent, loan, transfer or distribute any portion of the
              Services. You agree not to modify, adapt, translate or create derivative works from the Services. Unless
              the following restrictions are prohibited by law, you agree not to reverse engineer or decompile the
              Services, attempt to do so, or assist anyone in doing so.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>TRADEMARKS</Header>
            <p style={{ marginTop: '0px' }}>
              These Services are protected by trademark, copyright and other American and foreign laws. Please respect
              our LOHK and our rights. To that end, you agree not to remove, obscure, or alter any trademark, copyright
              or other proprietary rights notices displayed in the Services, Software or on the LOHK website.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>THE SERVICES</Header>
            <p style={{ marginTop: '0px' }}>
              LOHKER is providing the Services on an &quot;as is, as available&quot; basis, without representation or
              warranty of any kind to the fullest extent permitted by law. LOHKER does not guarantee the continuous
              availability of the Services or of any specific feature(s) of the Services.<br/><br/>
              LOHKER may modify the Services or any feature of the Services, impose usage or service limits, suspend
              Services or any feature of the Services permanently or temporarily, or block certain kinds of usage, at
              our sole discretion. We will inform you of any significant changes to the Services we may make. We may
              notify you of such changes by sending you an e-mail or by posting relevant information on the LOHK
              website.
            </p><br/>
            <Header as="h4" textAlign="left" style={{ marginTop: '-10px' }}>TERMINATION</Header>
            <p style={{ marginTop: '0px' }}>
              You are free to stop using the Services at any time. You also agree that we can suspend or end your access
              to the Services at any time. For example, we may suspend or end your access to the Services if we find you
              to not be complying with the terms of this Agreement. In any case where we suspend or end your access, we
              will try to contact you by email to notify you of the details.<br/><br/>
              If you&apos;d like to have the contents of Your LOHK deleted from our servers, please contact the
              LOHK support team who can help you delete Your LOHK.
            </p>
          </Container>
        </div>
    );
  }
}

export default Terms;

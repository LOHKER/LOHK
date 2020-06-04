import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';


class EmailPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pin: '', redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle pin submission.
   * Users should have been given a pin
   * Then redirect to the home page if entered correctly. */
  submit = () => {
    const { email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {

    console.log(Meteor.user().emails[0].address);

    // Client: Asynchronously send an email.
    Meteor.call(
        'sendEmail',
        'Meteor.user().emails[0].address',
        'turing.lohk@gmail.com',
        'Hello from Meteor!',
        'This is a test of Email.send.',
    );

    const { from } = this.props.location.state || { from: { pathname: '/dash' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    return (
      <Container>
        <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              You should have recieved an email with a pin.
              Please enter that pin in the form below as exactly as it shows in the email.
            </Header>
            <Form onSubmit={this.submit}>
              <Segment>
                <Form.Input
                  label="Pin"
                  icon="lock"
                  iconPosition="left"
                  name="pin"
                  placeholder="Type Pin Here"
                  type="pin"
                  onChange={this.handleChange}
                />
                <Form.Button content="Submit"/>
              </Segment>
            </Form>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Pin was not correct"
                content={this.state.error}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
EmailPin.propTypes = {
  location: PropTypes.object,
};

export default EmailPin;

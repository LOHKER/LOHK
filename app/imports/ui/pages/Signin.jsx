import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
export default class Signin extends React.Component {

  /** Initialize component state with properties for login and redirection. */
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', error: '', redirectToPin: false,
      pin: '', pin_input: '', redirectToRefer: false,
    };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange_login = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleChange_pin = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signin submission using Meteor's account mechanism. */
  submit_pin = () => {
    const { pin_input, pin } = this.state;
    if (pin_input === pin) {
      const { email, password } = this.state;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '', redirectToRefer: true });
        }
      });
    } else {
      this.setState({ error: 'Incorrect Pin' });
    }
  }

  submit_login = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        const random_pin = (`${Math.random()}`).substring(2, 7);
        this.setState({ error: '', redirectToPin: true, pin: random_pin });
        Meteor.logout();

        const template_params = {
          to: this.state.email,
          pin: this.state.pin,
        };

        const service_id = 'default_service';
        const template_id = 'template_Z888wQ4B';
        const sendEmail = false;
        if (sendEmail) {
          // eslint-disable-next-line no-undef
          emailjs.send(service_id, template_id, template_params);
        } else {
          console.log(`pin = ${this.state.pin}`);
        }
      }
    });
  }

  /** Render the signin form. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dash' } };
    // if correct authentication, redirect to page instead of login screen
    // if (this.state.redirectToReferer) {
    //   return <Redirect to={from}/>;
    // }
    // Otherwise return the Login form.
    const loginPage = (
      <div>
        <NavBar/>
        <div style={{ paddingTop: '70px', paddingBottom: '80px' }}>
          <Grid relaxed='very' divided container verticalAlign='middle' centered columns={'equal'}>
            <Grid.Column>
              <Header as={'h2'}>
                WELCOME BACK TO LOHK
              </Header>
              <Header as={'h3'}>
                Access all your passwords in one place
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Form onSubmit={this.submit_login}>
                <Segment>
                  <Form.Input
                      label="Email Address"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange_login}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange_login}
                  />
                  <Form.Button
                      fluid
                      style={{ color: 'white', backgroundColor: '#2A427A' }}
                      disabled={!this.state.email || !this.state.password}
                      content="LOG IN"
                  />
                  New to LOHK?&ensp;
                  <Link to="/signup">Create an account</Link>
                </Segment>
              </Form>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Login was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </div>
        </div>
    );

    const pinPage = (
      <div>
        <NavBar/>
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                You should have recieved an email with a pin.
                Please enter that pin in the form below as exactly as it shows in the email.
              </Header>
              {/* this button will allow the email to be sent - TO BE IMPLEMENTED */}
              {/* <Form.Button content="Send verification pin" onSubmit={this.sendEmail}/> */}
              <Form onSubmit={this.submit_pin}>
                <Segment>
                  <Form.Input
                      label="Pin"
                      icon="lock"
                      iconPosition="left"
                      name="pin_input"
                      placeholder="Type Pin Here"
                      type="pin"
                      value={this.state.pin_input}
                      onChange={this.handleChange_pin}
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
        </div>
    );

    if (this.state.redirectToRefer) {
      return <Redirect to={from}/>;
    }

    if (this.state.redirectToPin) {
      return pinPage;
    }
    return loginPage;
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signin.propTypes = {
  location: PropTypes.object,
};

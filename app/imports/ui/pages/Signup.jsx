import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Form, Grid, Header, Message, Popup, Image } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import NavBar from '../components/NavBar';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
    email: '',
    user: '',
    password: '',
    confirm: '',
    error: '',
    redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { email, user, password, confirm } = this.state;

    if (!this.isValidPassword(password, confirm)) {
      return;
    }
    Accounts.createUser({ email, user, username: user, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /**
   * Password Requirements:
   - Must be 8 - 32 characters long
   - Have at least one upper case character
   - Have at least one lower case character
   - Have at least one numeric character
   - Have at least one special character
   - New password correctly entered twice
   - New password cannot be the same as the old password
   * @param password
   * @param confirm
   * @returns {boolean}
   */
  isValidPassword(password, confirm) {
    if (password !== confirm) {
      this.setState({ error: ['Passwords do not match'], password: '', confirm: '' });
      return false;
    }

    const length = password.length;

    if (length < 8) {
      this.setState({ error: ['Password is too short. Minimum is 8 characters.'], password: '', confirm: '' });
      return false;
    }
    if (length > 32) {
      this.setState({ error: ['Passwords is too long. Maximum is 32 characters'] });
      return false;
    }

    let hasSpecial = false;
    let hasInvalid = false;
    let hasNumeric = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

    for (let i = 0; i < password.length; i++) {
      const code = password.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        hasLowerCase = true;
      } else
        if (code >= 65 && code <= 90) {
          hasUpperCase = true;
        } else
          if (code >= 48 && code <= 57) {
            hasNumeric = true;
          } else
            if (code >= 33 && code <= 126) {
              hasSpecial = true;
            } else {
              hasInvalid = true;
              break;
            }
    }

    if (hasInvalid) {
      this.setState({ error: ['Password contains an invalid character.'], password: '', confirm: '' });
      return false;
    }

    if (hasSpecial && hasUpperCase && hasLowerCase && hasNumeric && !hasInvalid) {
      return true;
    }

    const err_msg = [];
    if (!hasSpecial) {
      err_msg.push('A special character. Examples: ! @ # % ^ & * ( )');
    }
    if (!hasUpperCase) {
      err_msg.push('An upper case character.');
    }
    if (!hasLowerCase) {
      err_msg.push('A lower case character.');
    }
    if (!hasNumeric) {
      err_msg.push('A numeric character. Examples: 1 2 3');
    }
    this.setState({ error: err_msg, password: '', confirm: '' });
    return false;
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dash' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    const requirements =
        <ul>
          <li>Must be 8 - 32 characters long</li>
          <li>At least 1 upper case character</li>
          <li>At least 1 lower case character</li>
          <li>At least 1 numeric character</li>
          <li>At least 1 special character</li>
          <li>New password correctly entered twice</li>
          <li>New password cannot be the same as the old password</li>
        </ul>;

    return (
      <div>
      <NavBar/>
        <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <Image style={{ width: '100px' }} centered src={'/images/LOHK-dark.png'}/>
          <Header as="h2" textAlign="center">
            WELCOME TO LOHK
          </Header>
          <Grid divided relaxed='very' container
                style={{ paddingTop: '50px' }} centered columns={'equal'}>
            <Grid.Column>
              <Form onSubmit={this.submit}>
                <Form.Input
                    label="Email Address"
                    icon="mail"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    required
                />
                <Form.Input
                    label="Username"
                    icon="id badge"
                    iconPosition="left"
                    name="user"
                    type="name"
                    placeholder="Username"
                    onChange={this.handleChange}
                    required
                />
                <Popup
                    header='Password Requirements:'
                    hoverable
                    content={requirements}
                    position='bottom left'
                    flowing
                    trigger={<Form.Input
                        label="Password"
                        icon="lock"
                        iconPosition="left"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />}
                />
                <Form.Input
                    label="Confirm Password"
                    icon="lock"
                    iconPosition="left"
                    name="confirm"
                    placeholder="Confirm password"
                    type="password"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                />
                <Form.Button
                    fluid
                    style={{ color: 'white', backgroundColor: '#2A427A' }}
                    disabled={!this.state.email || !this.state.password || !this.state.confirm}
                    content="SIGN UP"
                />
                Already have an account? <Link to="/signin">Login</Link>
              </Form>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message error>
                    <Message.Header>Registration was not successful</Message.Header>
                    <p>
                      Your password is missing one or more of the following parameters:
                    </p>
                    <Message.List items={this.state.error}/>
                  </Message>
              )}
            </Grid.Column>
            <Grid.Column>
              <Image centered src={'/images/laptop.png'}/>
            </Grid.Column>
          </Grid>
        </div>
        </div>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;

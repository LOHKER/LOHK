import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import ListInformation from '../pages/ListInformation';
import AddInformation from '../pages/AddInformation';
import AddCard from '../pages/AddCard';
import EditInformation from '../pages/EditInformation';
import EditCard from '../pages/EditCard';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import AdminPage from '../pages/AdminPage';
import RemoveUser from '../pages/RemoveUser';
import Privacy from '../pages/Privacy';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/dash" component={Dashboard}/>
              <Route path='/privacy' component={Privacy}/>
              <ProtectedRoute path="/add" component={AddInformation}/>
              <ProtectedRoute path="/edit/:_id" component={EditInformation}/>
              <AdminProtectedRoute path="/admin" component={AdminPage}/>
              <AdminProtectedRoute path="/admin-remove" component={RemoveUser}/>
              <ProtectedRoute path="/list" component={ListInformation}/>
              <ProtectedRoute path="/add-account" component={AddInformation}/>
              <ProtectedRoute path="/add-card" component={AddCard}/>
              <ProtectedRoute path="/edit-accounts/:_id" component={EditInformation}/>
              <ProtectedRoute path="/edit-card/:_id" component={EditCard}/>
              {/* ADD IN AN ADMIN PAGE TODO TODO TODO TODO TODO */}
              {/* <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/> */}
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;

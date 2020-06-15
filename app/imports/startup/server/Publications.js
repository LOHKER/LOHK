import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';
import { Informations } from '../../api/information/Information';
import { Cards } from '../../api/card/Card';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Information', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Informations.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Card', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Cards.find({ owner: username });
  }
  return this.ready();
});
Meteor.publish('Admin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    const username = Meteor.users.find();
    return username;
  }
  return this.ready();
});

// /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
// Meteor.publish('StuffAdmin', function publish() {
//   if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
//     return Stuffs.find();
//   }
//   return this.ready();
// });

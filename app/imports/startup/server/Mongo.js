import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { Informations } from '../../api/information/Information.js';
import { Cards } from '../../api/card/Card.js';

/* eslint-disable no-console */

Meteor.methods({
  sendEmail(to, from, subject, text) {
    console.log('sendEmail ran');
    // Make sure that all arguments are strings.
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();

    // Email.send({ to, from, subject, text });
    const template_params = {
      to: to,
      pin: text,
    };

    const service_id = 'default_service';
    const template_id = 'template_Z888wQ4B';
    emailjs.send(service_id, template_id, template_params);
  },
});

/**
 * Related to INFORMATION API
 */
/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Informations.insert(data);
}

/** Initialize the collection if empty. */
if (Informations.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default accounts.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/**
 * Related to CARD API
 */
/** Initialize the database with a default data document. */
function addData2(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Cards.insert(data);
}

/** Initialize the collection if empty. */
if (Cards.find().count() === 0) {
  if (Meteor.settings.defaultCard) {
    console.log('Creating default cards.');
    Meteor.settings.defaultCard.map(data => addData2(data));
  }
}

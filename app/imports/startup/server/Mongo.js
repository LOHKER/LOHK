import { Meteor } from 'meteor/meteor';
import { Informations } from '../../api/information/Information.js';
import { Cards } from '../../api/card/Card.js';

/* eslint-disable no-console */

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

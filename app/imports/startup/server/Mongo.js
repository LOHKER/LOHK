import { Meteor } from 'meteor/meteor';
import { Informations } from '../../api/information/Information.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Informations.insert(data);
}

/** Initialize the collection if empty. */
if (Informations.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

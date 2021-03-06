/**
 * API TO HANDLE EVERYTHING RELATED TO ACCOUNTS
 * INCLUDES: USERNAME, PASSWORD, NOTES (ANYTHING THEY WANT TO NOTE REGARDING ACCOUNT
 */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Informations = new Mongo.Collection('Informations');

/** Define a schema to specify the structure of each document in the collection. */
const InformationSchema = new SimpleSchema({
  username: String,
  password: String,
  owner: String,
  notes: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Informations.attachSchema(InformationSchema);

/** Make the collection and schema available to other code. */
export { Informations, InformationSchema };

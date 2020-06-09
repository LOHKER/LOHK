/**
 * API TO HANDLE EVERYTHING RELATED TO CREDITCARDS
 * INCLUDES: CARD NUMBER, SECURITY PIN, EXP DATE, NOTES (ANYTHING THEY WANT TO NOTE REGARDING THE CARD)
 */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Cards = new Mongo.Collection('Cards');

/** Define a schema to specify the structure of each document in the collection. */
const CardSchema = new SimpleSchema({
  number: String,
  pin: String,
  expire: String,
  owner: String,
  notes: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Cards.attachSchema(CardSchema);

/** Make the collection and schema available to other code. */
export { Cards, CardSchema };

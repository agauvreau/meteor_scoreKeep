import {Mongo} from 'meteor/mongo';
// the command bellow will store the players collection creation command into a variable.
export const Players = new Mongo.Collection('players');
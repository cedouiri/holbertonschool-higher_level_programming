#!/usr/bin/node
// a script that imports a dictionary of occurrences by user id
// and computes a dictionary of user ids by occurrence
const { dict } = require('./101-data.js');
const newDict = {};
for (const k in dict) {
  if (newDict[dict[k]] === undefined) {
    newDict[dict[k]] = [];
  }
  newDict[dict[k]].push(k);
}
console.log(newDict);

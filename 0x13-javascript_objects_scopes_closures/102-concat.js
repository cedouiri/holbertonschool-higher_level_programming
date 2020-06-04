#!/usr/bin/node
// a script that imports a dictionary of occurrences by user id
// and computes a dictionary of user ids by occurrence
const { readFileSync, writeFileSync } = require('fs');
const fA = process.argv[2];
const fB = process.argv[3];
const fC = process.argv[4];
const cp1 = readFileSync(fA, 'utf8');
const cp2 = readFileSync(fB, 'utf8');
writeFileSync(fC, cp1 + cp2);

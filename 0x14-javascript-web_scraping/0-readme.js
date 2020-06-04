#!/usr/bin/node
// a script that reads and prints the content of a file
const { readFile } = require('fs');
const file = process.argv[2];
readFile(file, 'utf-8', (err, data) => {
  if (err) { console.log(err); } else { console.log(data); }
});

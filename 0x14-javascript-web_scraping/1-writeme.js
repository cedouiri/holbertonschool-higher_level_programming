#!/usr/bin/node
// a script that writes a string to a file
const { writeFile } = require('fs');
const file = process.argv[2];
const content = process.argv[3];
writeFile(file, content, 'utf-8', (err) => {
  if (err) console.log(err);
});

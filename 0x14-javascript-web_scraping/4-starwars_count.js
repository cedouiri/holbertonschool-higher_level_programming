#!/usr/bin/node
// a script that prints the number of movies where the character 0��Wedge Antilles0�� is present
const request = require('request');
const url = process.argv[2];
request(url, (err, res, body) => {
  if (err) { console.log(err); } else if (res.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const idx in films) {
      const filmChars = films[idx].characters;
      for (const cidx in filmChars) {
        if (filmChars[cidx].includes('18')) { count++; }
      }
    }
    console.log(count);
  } else { console.log('An error occured. Status code: ' + res.statusCode); }
});

#!/usr/bin/node
// a script that prints the title of a Star Wars movie where the episode number matches a given integer
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const episode = process.argv[2];
request(url + episode, (err, res, body) => {
  if (err) { console.log(err); } else if (res.statusCode === 200) {
    const json = JSON.parse(body);
    console.log(json.title);
  } else { console.log('An error occured. Status code: ' + res.statusCode); }
});

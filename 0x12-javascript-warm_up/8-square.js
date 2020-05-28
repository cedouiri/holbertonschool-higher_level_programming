#!/usr/bin/node
/*
 * a script that prints a square
 * If the first argument can0��t be converted to an integer, print Missing size
 * */
const x = process.argv[2];
if (!isNaN(x)) {
  for (let i = 0; i < x; i++) {
    console.log('X'.repeat(x));
  }
} else {
  console.log('Missing size');
}

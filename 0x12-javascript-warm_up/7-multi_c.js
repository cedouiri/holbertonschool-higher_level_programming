#!/usr/bin/node
/*
 * a script that prints x times C is fun
 * Where x is the first argument of the script
 * if NaN: print Missing number of occurrences
 * */
const x = process.argv[2];
if (!isNaN(x)) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}

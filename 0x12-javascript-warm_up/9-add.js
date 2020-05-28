#!/usr/bin/node
/*
 * a script that prints the addition of 2 integers
 * The first and the second argument is integer
 * */
const a = (process.argv[2]);
const b = (process.argv[3]);
function add (a, b) {
  if (!isNaN(a) || !isNaN(b)) {
    return (parseInt(a) + parseInt(b));
  } else {
    return (NaN);
  }
}
console.log(add(a, b));

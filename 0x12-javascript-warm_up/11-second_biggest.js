#!/usr/bin/node
/*
 * a script that searches the second biggest integer
 * in the list of arguments
 * */
const av = process.argv.slice(2);
let bg = 0;
if (av.length > 1) {
  av.sort((a, b) => a - b);
  bg = av[av.length - 2];
}
console.log(bg);

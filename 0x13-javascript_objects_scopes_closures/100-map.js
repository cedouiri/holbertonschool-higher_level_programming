#!/usr/bin/node
// a function that converts a number from base 10 to another base passed as argument
const { list } = require('./100-data.js');
console.log(list);
const newList = list.map((x, index) => x * index);
console.log(newList);

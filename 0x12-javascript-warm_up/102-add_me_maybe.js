#!/usr/bin/node
/*
 * a function that increments and calls a function
 * */
exports.addMeMaybe = function (n, f) {
  f(++n);
};

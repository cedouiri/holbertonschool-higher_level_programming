#!/usr/bin/node
// a function that returns the reversed version of a list
exports.esrever = function (list) {
  const rev = [];
  list.forEach(elm => {
    rev.unshift(elm);
  });
  return rev;
};

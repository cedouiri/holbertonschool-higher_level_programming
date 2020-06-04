#!/usr/bin/node
// a class Rectangle that defines a rectangle
module.exports = class Rectangle {
  constructor (w, h) {
    // If w or h is equal to 0 or not a positive integer, create an empty object
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  // an instance method called print() that prints the rectangle using the character X
  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  // an instance method called rotate() that exchanges the width and the height of the rectangle
  rotate () {
    this.width += this.height;
    this.height = this.width - this.height;
    this.width -= this.height;
  }

  // an instance method called double() that multiples the width and the height of the rectangle by 2
  double () {
    this.width *= 2;
    this.height *= 2;
  }
};

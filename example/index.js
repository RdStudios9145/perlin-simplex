var assert = require('assert')

import * as Noise from '..';

var simplex = new Noise.SimplexNoise()

for (var y = 40; y > 0; y--) {
  var line = ''
  for (var x = 80; x > 0; x--) {
    line += valToChar(simplex.noise(x/50, y/50))
  };
  console.log(line)
};

function valToChar (val) {
  var colors = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. '.split('')
  var nVal = (val+1)/2
  var idx = Math.floor(nVal * colors.length)
  return colors[idx]
}

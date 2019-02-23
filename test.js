const sp = require('./lib');

const isUpperCase = (c) => c == c.toUpperCase() && c != c.toLowerCase();
const isLowerCase = (c) => c != c.toUpperCase() && c == c.toLowerCase();
const isNonAlpha = (c) => c == c.toUpperCase() && c == c.toLowerCase();

let str = 'I need healing';
let max = str.length;
let upCount = 0;
let loCount = 0;
let current = '';

for (let i = 0; i < 10; ) {
  str = sp.spongemockify(str);
  upCount = 0;
  loCount = 0;
  for (let j = 0; j < max; j++) {
    current = str.charAt(j);
    if (isNonAlpha(current)) {
      upCount = 0;
      loCount = 0;
      continue;
    }
    if (isUpperCase(current)) {
      upCount++;
      loCount = 0;
      if (upCount == 3)
        throw '3 consecutive uppercase letters found.';

    }
    if (isLowerCase(current)) {
      loCount++;
      upCount = 0;
      if (loCount == 3)
        throw '3 consecutive lowercase letters found.';
    }
  }
  console.log('Iteration', ++i);
}

const string = 'NEGIE1';

const alphabetic = string.slice(0, -1);
const numeric = string.slice(-1);

const reverseAlphabetic = alphabetic.split('').reverse().join('');

const result = `${reverseAlphabetic}${numeric}`;

console.log(result);
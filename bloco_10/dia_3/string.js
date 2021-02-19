//const uppperCase = (string) => string.toUpperCase();
function upperCase(string) {
  return string.toUpperCase();
}

const firstLetter = (string) => string.slice(0, 0);

const concat = (string1, string2) => `${string1}${string2}`;

module.exports = { upperCase, firstLetter, concat };

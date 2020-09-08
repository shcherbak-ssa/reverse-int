module.exports = function reverse (n) {
  return n < 0 ? reverseNegativeNumber(n) : reversePositiveNumber(n);
}

function reverseNegativeNumber(n) {
  return +reverseStringNumber(-n); 
}
function reversePositiveNumber(n) {
  return +reverseStringNumber(n);
}
function reverseStringNumber(n) {
  return reverseString(`${n}`);
}
function reverseString(s) {
  return s.split('').reverse().join('');
}
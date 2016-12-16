function palindrome(str) {
  // Good luck!
  var clean = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  
  return clean === clean.split('').reverse().join('');
}

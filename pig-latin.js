function translate(str) {
  var prefix = str.match(/^[^aeiou]*/);
  
  if (prefix[0].length === 0) {
    return str + "way";
  } else {
    return str.slice(prefix[0].length) + prefix[0] + "ay";
  }
}

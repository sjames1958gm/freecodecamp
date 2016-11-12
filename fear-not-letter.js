function fearNotLetter(str) {
  
  var expect = str.charCodeAt(0) + 1;
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) != expect) {
      return String.fromCharCode(expect);
    }
    expect++;
  }
  
  return undefined;
}

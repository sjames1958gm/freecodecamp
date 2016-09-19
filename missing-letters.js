function fearNotLetter(str) {
  
  var curr = str.charCodeAt(0) + 1;
  
  for (var i = 1; i < str.length; i++) {
    if (curr !== str.charCodeAt(i)) {
      return String.fromCharCode(curr);
    }
    curr++;
  }

  return undefined;
}

fearNotLetter("abce");

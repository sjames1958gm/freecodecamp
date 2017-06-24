function rot13(str) { // LBH QVQ VG!
  var A = "A".charCodeAt(0);
  var Z = "Z".charCodeAt(0);
  var M = "M".charCodeAt(0);
  
  return [].reduce.call(str, function(a, b) {
    var code = b.charCodeAt();
    if (code >= A && code <= M) {
      code += 13;
    }
    else if (code > M && code <=Z) {
      code -=13;
    }
    return a + String.fromCharCode(code);
  }, "");

}

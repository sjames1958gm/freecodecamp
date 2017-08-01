function rot13(str) { // LBH QVQ VG!
  let A = "A".charCodeAt(0);
  let Z = "Z".charCodeAt(0);
  let shift = ((Z - A + 1) / 2)
  let Mid = A + shift;
  
  return [].reduce.call(str, function(a, b) {
    var code = b.charCodeAt();
    if (code >= A && code < Mid) {
      code += shift;
    }
    else if (code >= Mid && code <=Z) {
      code -= shift;
    }
    return a + String.fromCharCode(code);
  }, "");

}

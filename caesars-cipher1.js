function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  var A = "A".charCodeAt(0);
  var Z = "Z".charCodeAt(0);
  var M = "M".charCodeAt(0);
  console.log(A + ", " + Z + ", " + M);
  
  return arr.map(function(val) {
    var c = val.charCodeAt(0);
    console.log(c);
    if (c < A || c > Z) {
      return val;
    } else if (c <= M) {
      c += 13;
    } else {
      c -= 13;      
    }
    
    return String.fromCharCode(c);
  }).join('');
}

function rot13(str) { // LBH QVQ VG!
  
  return str.replace(/([A-M])|([N-Z])/g, function(m, p1, p2) {
    return String.fromCharCode(m.charCodeAt(0) + (p1 ? 13 : -13)); 
  });

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

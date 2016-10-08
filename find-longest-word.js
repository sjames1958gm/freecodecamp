function findLongestWord(str) {
//   var a = str.split(' ');
  
//   var longest = 0;
//   for (var i = 0; i < a.length; i++) {
//     if (a[i].length > longest) {
//       longest = a[i].length;
//     }
//   }
//   return longest

  return Math.max.apply(null, str.split(" ").map(function(w) { return w.length; }));
}

findLongestWord("The quick brown fox jumped over the lazy dog");


function findLongestWord(str) {
  var f = function(a, b) {
    return b.length - a.length;
  };
  
  var arr = str.split(' ');
  arr.sort(f);
  
  return arr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

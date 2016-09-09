function binaryAgent(str) {
  
  return str.split(' ').map(function(e) {
    return String.fromCharCode(parseInt(e, 2));
  }).join('');
}

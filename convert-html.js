function convertHTML(str) {
  // &colon;&rpar;
  var rep = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  
  return str.replace(/[&<>"']/g, function(e) {
    return rep[e];
  });
  
}

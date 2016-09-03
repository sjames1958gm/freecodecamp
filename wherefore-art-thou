function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var keys = Object.keys(source);
  
  return collection.filter(function(item) {
    return keys.every(function(key) {
      return item.hasOwnProperty(key) && item[key] === source[key];
    });
  });

  // Only change code above this line
}

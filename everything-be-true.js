function truthCheck(collection, pre) {
  // Is everyone being true?
  var result = collection.filter(function(ent) {
    return !(ent[pre]);
  });
  
  return result.length === 0;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}], "sex");

function lookUpProfile(firstName, prop){
// Only change code below this line
  for(var i = 0; i < contacts.length; i++){

    if (contacts[i].firstName == firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else {
        return "No such property";
     }
    }
  }
  return "No such contact";
  
// Only change code above this line
}

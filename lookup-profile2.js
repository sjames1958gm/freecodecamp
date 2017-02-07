function lookUpProfile(firstName, prop) {
  return contacts.reduce(function(a, c) {return a ? a : (c.firstName === firstName ? (c.hasOwnProperty(prop) ? c[prop] : "") : "");}, "") || "No such contact";
}

function titleCase(str) {
  
  return str.toLowerCase().split(' ').map(function(element){
     return element[0].toUpperCase() + element.slice(1);
  }).join(" ");
  
}

titleCase("I'm a little tea pot");

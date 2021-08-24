
function dictionary(){
  var Animal = { //creates var//
    Species:"cat", //links var to have a property of species//
    Color:"white", //links var to have a property of color//
    Age:"12", //links var to have a property of age//
    Sound:"Meow!" //links var to have a property of sound//
  };
  delete Animal.Color; //removes the color property//
  document.getElementById("Dictionary_id").innerHTML = Animal.Color; //sets the text with the id of Dictionary_id to be equal to my variable's color property(results in undefiened due to color being removed)//
}
